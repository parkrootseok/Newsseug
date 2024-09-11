import styled from 'styled-components';

function UserInfo() {
  return (
    <Wrapper>
      <UserImg src="data:image/png;base64,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" />
      <InfoBox>
        <UserName>김민경</UserName>
        <SubBox>
          <UserId>@user-fb8pr4rj12</UserId>
          <LogoutBtn>로그아웃</LogoutBtn>
        </SubBox>
      </InfoBox>
    </Wrapper>
  );
}

export default UserInfo;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 8px 0;
  align-items: center;
  gap: 12px;
`;

const UserImg = styled.img`
  display: flex;
  width: 62px;
  height: 62px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 999px;
  border: 0.1px solid ${({ theme }) => theme.relaxColor.main};
  background: ${({ theme }) => theme.bgColor};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const UserName = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const SubBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.relaxColor.littlelight};
`;
const UserId = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.3px;
`;

const LogoutBtn = styled.a`
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.25px;
  &:active {
    text-decoration: underline;
  }
`;
