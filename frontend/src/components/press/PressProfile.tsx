import styled from 'styled-components';

function PressProfile() {
  return (
    <Wrapper>
      <h1>hi</h1>
    </Wrapper>
  );
}

export default PressProfile;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(78, 163, 255);
`;

const Logo = styled.img`
  display: inline-flex;
  padding: 19px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.relaxColor.superlight};
  background: ${({ theme }) => theme.bgColor};
`;
