import styled from 'styled-components';

function SubmitButton() {
  return (
    <SubmitButtonStyle>
      <SubmitButtonTextStyle>입력 완료</SubmitButtonTextStyle>
    </SubmitButtonStyle>
  );
}
export default SubmitButton;

const SubmitButtonStyle = styled.button`
  display: flex;
  width: calc(87%);
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: #58d7a2;
`;

const SubmitButtonTextStyle = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;
