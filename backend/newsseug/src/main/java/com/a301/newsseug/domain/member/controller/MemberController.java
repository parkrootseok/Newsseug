package com.a301.newsseug.domain.member.controller;

import com.a301.newsseug.domain.auth.model.entity.CustomUserDetails;
import com.a301.newsseug.domain.member.model.dto.request.UpdateMemberRequest;
import com.a301.newsseug.domain.member.model.dto.response.GetMemberResponse;
import com.a301.newsseug.domain.member.service.MemberService;
import com.a301.newsseug.global.model.dto.Result;
import com.a301.newsseug.global.util.ResponseUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Member 도메인에 대한 Controller 계층
 */
@Tag(name = "멤버 관련 API")
@RestController
@RequestMapping("/api/v1/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @Operation(summary = "사용자 정보 조회", description = "사용자 정보를 조회한다.")
    @GetMapping()
    public ResponseEntity<Result<GetMemberResponse>> getMemberDetails(
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        return ResponseUtil.ok(Result.of(memberService.getMember(userDetails)));
    }

    @Operation(summary = "사용자 정보 등록", description = "사용자 정보(닉네임, 성별, 생년월일, 프로필 사진 등)를 등록한다.")
    @PutMapping()
    public ResponseEntity<Result<Boolean>> updateMember(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody @Valid UpdateMemberRequest request
    ) {
        memberService.updateMember(userDetails, request);
        return ResponseUtil.ok(Result.of(Boolean.TRUE));
    }

}
