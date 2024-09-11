import { NavItemProps } from '@/types/common/layout';
import styled from 'styled-components';

function NavItem({
  icon,
  text,
  isMain,
  active,
  onClick,
}: Readonly<NavItemProps>) {
  return (
    <NavItemContainer $active={active} $isMain={isMain} onClick={onClick}>
      {icon}
      <NavText>{text}</NavText>
    </NavItemContainer>
  );
}

export default NavItem;

const NavItemContainer = styled.div<{
  $active?: boolean;
  $isMain?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  cursor: pointer;

  position: relative;
  top: ${({ $isMain }) =>
    $isMain ? '-16px' : '0'}; // 원하는 정도로 값을 조절 가능
  ${({ $isMain, $active, theme }) =>
    !$isMain &&
    `
    svg path {
      fill: ${$active ? theme.mainColor : theme.relaxColor.dark};
    }
  `}
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
