package com.a301.newsseug.domain.interaction.model.dto.event;

import lombok.Builder;

@Builder
public record HateCountingEvent(String hash, Long id, Long delta) {

    public static HateCountingEvent of(String hash, Long id, Long delta) {
        return HateCountingEvent.builder()
                .hash(hash)
                .id(id)
                .delta(delta)
                .build();
    }

}
