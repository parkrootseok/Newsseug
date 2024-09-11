import styled from 'styled-components';
import PressProfile from './PressProfile';
import PressDescription from './PressDescription';

function PressInfo() {
  return (
    <Wrapper>
      <PressProfile />
      <PressDescription />
    </Wrapper>
  );
}

export default PressInfo;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
  padding: 12px 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;
