import { NormalWordProps } from '@/types/splash';
import styled from 'styled-components';

function NormalWord({ text }: Readonly<NormalWordProps>) {
  return <StyledNormalWord>{text}</StyledNormalWord>;
}

const StyledNormalWord = styled.p`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.7px;
`;

export default NormalWord;
