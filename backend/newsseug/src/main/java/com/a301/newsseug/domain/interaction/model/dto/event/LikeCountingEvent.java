package com.a301.newsseug.domain.interaction.model.dto.event;

import lombok.Builder;

@Builder
public record LikeCountingEvent(String hash, Long id, Long delta) {

    public static LikeCountingEvent of(String hash, Long id, Long delta) {
        return LikeCountingEvent.builder()
                .hash(hash)
                .id(id)
                .delta(delta)
                .build();
    }

}
