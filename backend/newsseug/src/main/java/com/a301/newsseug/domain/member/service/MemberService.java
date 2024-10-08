package com.a301.newsseug.domain.member.service;

import com.a301.newsseug.domain.auth.model.entity.CustomUserDetails;
import com.a301.newsseug.domain.member.model.dto.request.UpdateMemberRequest;
import com.a301.newsseug.domain.member.model.dto.response.GetMemberFolderResponse;
import com.a301.newsseug.domain.member.model.dto.response.GetMemberResponse;
import com.a301.newsseug.domain.press.model.dto.response.ListSimplePressResponse;
import com.a301.newsseug.global.model.dto.SlicedResponse;
import java.util.List;

public interface MemberService {

    GetMemberResponse getMember(CustomUserDetails userDetails);

    void updateMember(CustomUserDetails userDetails, UpdateMemberRequest request);

    ListSimplePressResponse getPressByMember(CustomUserDetails userDetails);

    SlicedResponse<List<GetMemberFolderResponse>> getFoldersByMember(CustomUserDetails userDetails, int pageNumber);

    void subscribe(CustomUserDetails userDetails, Long pressId);

    void unsubscribe(CustomUserDetails userDetails, Long pressId);

}
