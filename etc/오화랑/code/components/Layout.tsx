import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

/**
 * IMP : styled-components 를 사용하여 LayoutContainer 를 만들어서 사용함
 * IMP : BackgroundColor 를 props 로 받아서 사용함 (기본값은 #FFFFFF)
 */
const LayoutContainer = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? '#ffffff'};
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  box-sizing: border-box;
`;

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */
export default function Layout({ children, backgroundColor }: Readonly<LayoutProps>) {
  return <LayoutContainer $backgroundColor={backgroundColor}>{children}</LayoutContainer>;
}
