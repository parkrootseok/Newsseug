import styled from 'styled-components';
import { ContainerProps } from '@/types/common';

const ContainerBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`;

/**
 * IMP : 자식 요소를 동적으로 Rendering 할 수 있음.
 * @param param0
 * @returns
 */
function Container({ children }: Readonly<ContainerProps>) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;
