import styled from 'styled-components';
import { LayoutProps } from '@/types/common';

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
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 0 15px;
  flex-grow: 1;
  box-sizing: border-box;
`;
