import { PressCardProps } from '@/types/subscribe';
import styled from 'styled-components';

function PressCard({
  imgUrl,
  pressName,
  isActive,
  isAllActive,
  onClick,
}: PressCardProps) {
  return (
    <Container isActive={isActive} isAllActive={isAllActive} onClick={onClick}>
      <PressLogo />
      <PressName>{pressName}</PressName>
    </Container>
  );
}

export default PressCard;

const Container = styled.div<{ isActive: boolean; isAllActive: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px 8px;
  gap: 8px;
  opacity: ${({ isActive, isAllActive }) =>
    isActive || isAllActive ? 1 : 0.5};
  background-color: ${({ isActive, isAllActive }) =>
    isActive && !isAllActive ? '#dfdfdf52' : 'transparent'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* transition:
    opacity 0.4s ease-in-out,
    background-color 0.4s ease-in-out; */

  -webkit-transition:
    opacity 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
  -moz-transition:
    opacity 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
  -o-transition:
    opacity 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
  transition:
    opacity 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
`;

const PressLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.relaxColor.dark};
  padding: 4px;
`;

const PressName = styled.p`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  /* color: #dfdfdf52; */
`;
