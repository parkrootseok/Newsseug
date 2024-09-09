import { NavItemProps } from '@/types/common';
import styled from 'styled-components';

const NavItemContainer = styled.div<{
  active?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  color: ${({ active, theme }) =>
    active ? theme.mainColor : theme.relaxColor.dark};
  cursor: pointer;

  svg path {
    fill: ${({ active, theme }) =>
      active ? theme.mainColor : theme.relaxColor.dark};
  }
`;

const NavText = styled.span`
  color: ${({ theme }) =>
    theme.relaxColor.dark}; // theme에서 진한 회색 가져오기
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function NavItem({
  icon,
  text,
  active,
  onClick,
}: Readonly<NavItemProps>) {
  return (
    <NavItemContainer active={active} onClick={onClick}>
      {icon}
      <NavText>{text}</NavText>
    </NavItemContainer>
  );
}
