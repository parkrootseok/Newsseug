import { PressCardProps } from '@/types/subscribe';
import styled from 'styled-components';
import {
  PressLogo,
  LogoContainer,
  PressName,
  PressContainer,
} from 'styles/subscribe-styles';

function PressCard({
  imgUrl,
  pressName,
  isSubscribed,
  onClick,
}: PressCardProps) {
  return (
    <Container>
      <CustomLogoContainer isSubscribed={isSubscribed} onClick={onClick}>
        <PressLogo src={imgUrl} />
        <Circle isSubscribed={isSubscribed}>{isSubscribed ? '-' : '+'}</Circle>
      </CustomLogoContainer>
      <PressName>{pressName}</PressName>
    </Container>
  );
}

export default PressCard;

const Container = styled(PressContainer)`
  position: relative;
`;

const CustomLogoContainer = styled(LogoContainer)<{
  isSubscribed: boolean;
}>`
  border: ${({ isSubscribed, theme }) =>
    `${isSubscribed ? '2px' : '1px'} solid ${isSubscribed ? theme.mainColor : '#f4f4f4'}`};

  transition: border 0.8s ease-in-out;
`;

const Circle = styled.div<{
  isSubscribed: boolean;
}>`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${({ isSubscribed, theme }) =>
    isSubscribed ? 'gray' : theme.mainColor};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
