import styled from 'styled-components';
import { LayoutProps } from '@/types/common/layout';

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */
function Container({ children }: Readonly<LayoutProps>) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  padding-top: calc(6.7vh);
  padding-bottom: calc(7vh);
  box-sizing: border-box;
`;
