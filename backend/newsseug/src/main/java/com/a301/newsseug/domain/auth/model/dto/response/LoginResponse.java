package com.a301.newsseug.domain.auth.model.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

@Builder
@Schema(name = "로그인 결과", description = "로그인 요청에 대한 정보.")
public record LoginResponse(
        
        @Schema(description = "어세스 토큰")
        String accessToken,

        @Schema(description = "리프레쉬 토큰")
        String refreshToken
        
) {

    public static LoginResponse of(String accessToken, String refreshToken) {
        return LoginResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

}
