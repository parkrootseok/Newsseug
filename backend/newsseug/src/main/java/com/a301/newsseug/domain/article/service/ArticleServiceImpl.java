package com.a301.newsseug.domain.article.service;

import com.a301.newsseug.domain.article.model.dto.response.GetArticleDetailsResponse;
import com.a301.newsseug.domain.article.model.dto.response.GetArticleResponse;
import com.a301.newsseug.domain.article.model.entity.Article;
import com.a301.newsseug.domain.article.model.entity.type.ConversionStatus;
import com.a301.newsseug.domain.article.repository.ArticleRepository;
import com.a301.newsseug.domain.auth.model.entity.CustomUserDetails;
import com.a301.newsseug.domain.interaction.model.dto.SimpleHateDto;
import com.a301.newsseug.domain.interaction.model.dto.SimpleLikeDto;
import com.a301.newsseug.domain.interaction.model.entity.History;
import com.a301.newsseug.domain.interaction.repository.HateRepository;
import com.a301.newsseug.domain.interaction.repository.LikeRepository;
import com.a301.newsseug.domain.interaction.service.HistoryService;
import com.a301.newsseug.domain.member.model.entity.Member;
import com.a301.newsseug.domain.member.model.entity.Subscribe;
import com.a301.newsseug.domain.member.service.SubscribeService;
import com.a301.newsseug.domain.press.repository.PressRepository;
import com.a301.newsseug.global.model.dto.SlicedResponse;
import com.a301.newsseug.global.model.entity.ActivationStatus;
import com.a301.newsseug.global.model.entity.SliceDetails;
import com.a301.newsseug.global.util.AgeUtil;
import com.a301.newsseug.global.util.ClockUtil;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ArticleServiceImpl implements ArticleService {

    private final CounterService counterService;
    private final BirthYearCountService birthYearCountService;
    private final HistoryService historyService;
    private final SubscribeService subscribeService;
    private final ArticleRepository articleRepository;
    private final PressRepository pressRepository;
    private final LikeRepository likeRepository;
    private final HateRepository hateRepository;

    @Override
    public GetArticleDetailsResponse getArticleDetail(
            CustomUserDetails userDetails, Long articleId
    ) {

        Article article = articleRepository.getOrThrow(articleId);
        Long incrementedViewCount = counterService.increment("article:viewCount:", articleId, 1L);
        Long likeCount = counterService.findByKey("article:likeCount:", articleId).orElse(0L);
        Long hateCount = counterService.findByKey("article:hateCount:", articleId).orElse(0L);

        if (Objects.nonNull(userDetails)) {

            Member member = userDetails.getMember();
            historyService.createHistory(member, article);
            birthYearCountService.incrementBirthYearCount(member, article);

            return GetArticleDetailsResponse.of(
                    article,
                    article.getViewCount() + incrementedViewCount,
                    subscribeService.isSubscribed(member, article.getPress()),
                    SimpleLikeDto.of(
                            likeRepository.existsByMemberAndArticle(userDetails.getMember(),
                                    article),
                            article.getLikeCount() + likeCount
                    ),
                    SimpleHateDto.of(
                            hateRepository.existsByMemberAndArticle(userDetails.getMember(),
                                    article),
                            article.getHateCount() + hateCount
                    )
            );

        }

        return GetArticleDetailsResponse.of(
                article,
                article.getViewCount() + incrementedViewCount,
                false,
                SimpleLikeDto.of(false, article.getLikeCount() + likeCount),
                SimpleHateDto.of(false, article.getHateCount() + hateCount)
        );

    }

    @Override
    public SlicedResponse<List<GetArticleResponse>> getRandomArticle(
            CustomUserDetails userDetails
    ) {

        Pageable pageable = PageRequest.of(0, 10);
        Member loginMember = userDetails.getMember();
        Optional<History> latestHistory = historyService.getLatestHistoryByMember(loginMember);

        Slice<Article> sliced;
        if (latestHistory.isPresent()) {
            sliced = articleRepository.findAllByCategoryOrderByRandom(
                    latestHistory.get().getArticle().getCategory(),
                    ActivationStatus.ACTIVE,
                    ConversionStatus.SUCCESS,
                    pageable
            );
        } else {
            sliced = articleRepository.findAllOrderByRandom(
                    ActivationStatus.ACTIVE,
                    ConversionStatus.SUCCESS,
                    pageable
            );
        }

        return SlicedResponse.of(
                SliceDetails.of(sliced.getNumber(), sliced.isFirst(), sliced.hasNext()),
                GetArticleResponse.of(sliced.getContent())
        );

    }

    @Override
    public SlicedResponse<List<GetArticleResponse>> getTodayArticlesByCategory(
            String category, int pageNumber
    ) {

        Pageable pageable = PageRequest.of(pageNumber, 10);
        LocalDateTime startOfDay = ClockUtil.getLocalDateTime().toLocalDate().atStartOfDay();
        LocalDateTime endOfDay = startOfDay.plusDays(1);
        Slice<Article> sliced = articleRepository.findAllByCategoryAndCreatedAtBetween(category,
                startOfDay, endOfDay, pageable);

        return SlicedResponse.of(
                SliceDetails.of(sliced.getNumber(), sliced.isFirst(), sliced.hasNext()),
                GetArticleResponse.of(sliced.getContent())
        );

    }

    @Override
    public SlicedResponse<List<GetArticleResponse>> getArticlesByCategory(
            String category, int pageNumber
    ) {

        Pageable pageable = PageRequest.of(pageNumber, 10);
        Slice<Article> sliced = articleRepository.findAllByCategory(category, pageable);

        return SlicedResponse.of(
                SliceDetails.of(sliced.getNumber(), sliced.isFirst(), sliced.hasNext()),
                GetArticleResponse.of(sliced.getContent())
        );

    }

    @Override
    public SlicedResponse<List<GetArticleResponse>> getArticlesByPress(
            CustomUserDetails userDetails, Long pressId, int pageNumber, String category
    ) {

        Pageable pageable = PageRequest.of(pageNumber, 20);
        Slice<Article> sliced;
        if (Objects.nonNull(pressId)) {
            sliced = articleRepository.findAllByPressAndCategory(
                    pressRepository.getOrThrow(pressId), category, pageable
            );
        } else {
            List<Subscribe> subscribes = subscribeService.getSubscribeByMember(userDetails.getMember());
            sliced = articleRepository.findByPress(
                    subscribes.stream().map(Subscribe::getPress).toList(),
                    category,
                    pageable
            );
        }

        return SlicedResponse.of(
                SliceDetails.of(sliced.getNumber(), sliced.isFirst(), sliced.hasNext()),
                GetArticleResponse.of(sliced.getContent())
        );

    }

    @Override
    public SlicedResponse<List<GetArticleResponse>> getArticlesByBirthYear(
            CustomUserDetails userDetails, int pageNumber, String category
    ) {

        Pageable pageable = PageRequest.of(pageNumber, 10);
        int age = AgeUtil.calculateAge(userDetails);
        Slice<Article> sliced = articleRepository.findAllByBirthYearOrderByViewCount(
                AgeUtil.calculateAgeBegin(age),
                AgeUtil.calculateAgeEnd(age),
                category,
                pageable
        );

        return SlicedResponse.of(
                SliceDetails.of(sliced.getNumber(), sliced.isFirst(), sliced.hasNext()),
                GetArticleResponse.of(sliced.getContent())
        );

    }

}
