import styled from 'styled-components';
import expandIcon from 'assets/expandIcon.svg';
import { useState } from 'react';

function PressDescription() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>(
    '안녕하세요! 연합뉴스TV에 오신 것을 환영합니다. 연합뉴스TV는 대한민국의24시간 뉴스 전문 방송채널로, 신속하고 정확한 뉴스 보도를 통해 여러분의 일상에 꼭 필요한 정보를 제공합니다. 저희 채널은 24시간 현장의 생생한 소식을 전달하며, 공정하고 균형 잡힌 보도를 통해 다양한 뉴스를 중립적인 시각으로 제공합니다. 또한, 뉴스의 현장을 생생하게 전달하여 현장감 있는 정보를 제공하고, 정치, 경제, 문화, 스포츠 등 다양한 분야의 소식을 다룹니다. 구독하시면 대한민국의 최신 뉴스와 중요한 사회 이슈를 실시간으로 접하실 수 있습니다. 연합뉴스TV와 함께 세상의 변화를 빠르고 정확하게 파악하세요! 이렇게 작성된 소개글은 간결하면서도 연합뉴스TV의 핵심 내용을 잘 전달합니다.',
  );

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const truncateText = (text: string) => {
    if (text.length > 110) {
      return text.slice(0, 110) + '...';
    }
    return text;
  };

  return (
    <Wrapper>
      <DescriptionText isOpen={isOpen}>
        {isOpen ? text : truncateText(text)}
      </DescriptionText>
      <OpenBtn onClick={handleOpen}>
        <BtnText>{isOpen ? '닫기' : '전체보기'}</BtnText>
        <BtnIcon isOpen={isOpen} src={expandIcon} />
      </OpenBtn>
    </Wrapper>
  );
}

export default PressDescription;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: ${({ theme }) => theme.descriptionBgColor};
`;

const DescriptionText = styled.p<{ isOpen: boolean }>`
  display: block;
  overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.textColor};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.3px;

  max-height: ${({ isOpen }) => (isOpen ? 'none' : 'calc(20.4px * 3)')};
`;

const OpenBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  border-radius: 10px;
  padding: 1px 5px;
  &:active {
    background-color: ${({ theme }) => theme.relaxColor.main + 30};
    transition: 0.2s;
  }
`;

const BtnText = styled.span`
  color: ${({ theme }) => theme.relaxColor.main};
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.275px;
`;
const BtnIcon = styled.img<{ isOpen: boolean }>`
  width: 12px;
  height: 12px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'none')};
  transition: 0.2s;
`;
