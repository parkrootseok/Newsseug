import { LayoutProps } from '@/types/common';
import styled from 'styled-components';

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */
function Layout({ children, backgroundColor }: Readonly<LayoutProps>) {
  return <LayoutBox $backgroundColor={backgroundColor}>{children}</LayoutBox>;
}

export default Layout;

/**
 * IMP : styled-components 를 사용하여 LayoutBox 를 만들어서 사용함
 */
const LayoutBox = styled.div<{ $backgroundColor?: string }>`
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
