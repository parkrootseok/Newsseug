import { useState } from 'react';
import styled from 'styled-components';

function PressProfile() {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = () => {
    setIsSubscribed((prev) => !prev);
  };
  return (
    <Wrapper>
      <Logo src="data:image/png;base64,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" />
      <TextArea>
        <InfoArea>
          <PressName>연합뉴스</PressName>
          <PressSubCnt>구독자 1231명</PressSubCnt>
        </InfoArea>
        <SubscribeBtn onClick={handleSubscribe} isSubscribed={isSubscribed}>
          {isSubscribed ? '구독 중' : '구독하기'}
        </SubscribeBtn>
      </TextArea>
    </Wrapper>
  );
}

export default PressProfile;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const Logo = styled.img`
  width: 64px;
  display: flex;
  padding: 19px 0px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.relaxColor.superlight};
  background: ${({ theme }) => theme.bgColor};
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const SubscribeBtn = styled.button<{ isSubscribed: boolean }>`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.mainColor};
  color: ${({ theme, isSubscribed }) =>
    isSubscribed ? theme.mainColor : theme.bgColor};
  background: ${({ theme, isSubscribed }) =>
    isSubscribed ? theme.bgColor : theme.mainColor};
  transition: 0.15s;
`;

const PressName = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;
`;

const PressSubCnt = styled.span`
  color: ${({ theme }) => theme.relaxColor.main};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.3px;
`;
