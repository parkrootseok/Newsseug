import styled from 'styled-components';
import { LayoutProps } from '@/types/common/layout';

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */
function Container({ children, isPaddingZero = false }: LayoutProps) {
  return <ContainerBox isPaddingZero={isPaddingZero}>{children}</ContainerBox>;
}

export default Container;

const ContainerBox = styled.div<{ isPaddingZero: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ isPaddingZero }) => (isPaddingZero ? '0' : '0 15px')};
  padding-top: 48px;
  padding-bottom: calc(7vh);
  box-sizing: border-box;
`;
