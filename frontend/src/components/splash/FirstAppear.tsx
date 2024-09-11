import styled, { keyframes } from 'styled-components';
import NormalWord from './NormalWord';
import VectorWord from '../common/VectorWord';

function FirstAppear() {
  return (
    <FirstAppearMethod>
      <VectorWord icon={VectorWordIcon} color={'#FFFFFF'} />
      <NormalWord text="스를" />
    </FirstAppearMethod>
  );
}

const VectorWordIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="98"
    height="98"
    viewBox="0 0 98 98"
    fill="none"
  >
    <path d="M81.6674 76.5165V95.3754C81.6674 96.977 80.8412 97.7778 79.1889 97.7778H61.3435C59.6911 97.7778 58.865 96.977 58.865 95.3754V76.5165H38.9128V95.3754C38.9128 96.977 38.0867 97.7778 36.4343 97.7778H18.5889C16.9366 97.7778 16.1104 96.977 16.1104 95.3754V76.5165H2.60245C0.867484 76.5165 0 75.6357 0 73.8739V60.5406C0 58.9389 0.867484 58.1382 2.60245 58.1382H95.1754C96.9103 58.1382 97.7778 58.9389 97.7778 60.5406V73.8739C97.7778 75.6357 96.9103 76.5165 95.1754 76.5165H81.6674ZM28.2552 30.03H91.8293C93.5643 30.03 94.4318 30.8308 94.4318 32.4324V46.4865C94.4318 48.0881 93.5643 48.8889 91.8293 48.8889H6.19631C5.37014 48.8889 4.7092 48.6887 4.21349 48.2883C3.71779 47.8879 3.51124 47.2473 3.59386 46.3664V2.28228C3.7591 0.760761 4.62658 0 6.19631 0H25.6527C27.4703 0 28.3378 0.84084 28.2552 2.52252V30.03Z" />
  </svg>
);

const appearAnimation = keyframes`
  0% {
    transform: translateX(-60%) skewX(-30deg);
  }
  100% {
  opacity: 1;
    transform: translateX(0) skewX(0deg);
  }
`;

const FirstAppearMethod = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 20%;
  left: 15%;
  gap: 15px;
  opacity: 0;
  animation: ${appearAnimation} 0.7s ease-out forwards;
`;

export default FirstAppear;
