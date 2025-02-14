package com.a301.newsseug.external.redis.config;

import com.a301.newsseug.domain.article.service.CounterService;
import com.a301.newsseug.domain.interaction.model.dto.event.HateCountingEvent;
import com.a301.newsseug.domain.interaction.model.dto.event.LikeCountingEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

@Component
@RequiredArgsConstructor
public class RedisEventListener {

    private final CounterService counterService;

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void handleLikeCountingEvent(LikeCountingEvent event) {
        counterService.increment(event.hash(), event.id(), event.delta());
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void handleHateCountingEvent(HateCountingEvent event) {
        counterService.increment(event.hash(), event.id(), event.delta());
    }

}
