import styled from 'styled-components';

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
};

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
  color: ${({ active }) => (active ? '#58D7A2' : '#5E5F60')}; // 활성화 상태에 따른 텍스트 색상 변경
  cursor: pointer;

  svg path {
    fill: ${({ active }) => (active ? '#58D7A2' : '#5E5F60')}; // SVG 경로의 색상 변경
  }
`;

const NavText = styled.span`
  color: var(--Label-Label-default, #5e5f60);
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function NavItem({ icon, text, active, onClick }: Readonly<NavItemProps>) {
  return (
    <NavItemContainer active={active} onClick={onClick}>
      {icon} {/* 아이콘 표시 */}
      <NavText>{text}</NavText> {/* 텍스트 표시 */}
    </NavItemContainer>
  );
}
