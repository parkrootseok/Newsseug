package com.a301.newsseug.domain.article.model.dto.response;

import com.a301.newsseug.domain.article.model.dto.ArticleDto;
import com.a301.newsseug.domain.article.model.entity.Article;
import com.a301.newsseug.domain.interaction.model.dto.SimpleHateDto;
import com.a301.newsseug.domain.interaction.model.dto.SimpleLikeDto;
import com.a301.newsseug.domain.press.model.dto.response.GetPressResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;

@Builder(access = AccessLevel.PRIVATE)
@Schema(name = "기사 상세 정보", description = "기사 조회시 노출할 정보.")
public record GetArticleDetailsResponse(

        @Schema(description = "기사 정보", examples = {"Object"})
        ArticleDto article,

        @Schema(description = "언론사 정보", examples = {"Object"})
        GetPressResponse press,

        @Schema(description = "좋아요 유무와 개수", examples = {"Object"})
        SimpleLikeDto likeInfo,

        @Schema(description = "싫어요 유무와 개수", examples = {"Object"})
        SimpleHateDto hateInfo

) {

    public static GetArticleDetailsResponse of(
            Article article, Long currentViewCount, Boolean isSubscribed, SimpleLikeDto likeInfo, SimpleHateDto hateInfo
    ) {

        return GetArticleDetailsResponse.builder()
                .article(ArticleDto.of(article, currentViewCount))
                .press(GetPressResponse.of(article.getPress(), isSubscribed))
                .likeInfo(likeInfo)
                .hateInfo(hateInfo)
                .build();

    }
}
