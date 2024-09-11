package com.a301.newsseug.domain.member.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.time.LocalDateTime;
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
public class MemberDetail {

    @Column(nullable = false)
    private String nickName;

    @Column(updatable = false, nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(updatable = false, nullable = false)
    private LocalDateTime birth;

    public static MemberDetail of(String nickName, Gender gender, LocalDateTime birth) {
        return MemberDetail.builder()
                .nickName(nickName)
                .gender(gender)
                .birth(birth)
                .build();
    }

}
