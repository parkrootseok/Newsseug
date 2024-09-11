package com.a301.newsseug.domain.member.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class OAuthDetail {

    @Column(updatable = false, nullable = false)
    @Enumerated(EnumType.STRING)
    private AuthProvider authProvider;

    @Column(updatable = false, nullable = false)
    private String authProviderId;

    public static OAuthDetail of(AuthProvider authProvider, String authProviderId) {
        return OAuthDetail.builder()
                .authProvider(authProvider)
                .authProviderId(authProviderId)
                .build();
    }

}
