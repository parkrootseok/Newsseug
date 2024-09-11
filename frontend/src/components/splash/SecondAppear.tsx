import styled, { keyframes } from 'styled-components';
import { DelayProps } from '@/types/splash';
import NormalWord from './NormalWord';
import VectorWord from '../common/VectorWord';

function SecondAppear({ delay }: Readonly<DelayProps>) {
  return (
    <SecondAppearStyle $delay={delay}>
      <NormalWordWrapper $delay={delay}>
        <NormalWord text="한번에" />
      </NormalWordWrapper>
      <VectorWordWrapper $delay={delay}>
        <VectorWord icon={VectorWordIcon} color={'#FFFFFF'} />
      </VectorWordWrapper>
    </SecondAppearStyle>
  );
}

const VectorWordIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="109"
    height="98"
    viewBox="0 0 109 98"
    fill="none"
  >
    <path d="M0 48.2853V59.5117C0 61.2015 0.867474 62.0472 2.60242 62.0472H95.1754C95.4631 62.0472 95.727 62.0251 95.967 61.979C96.548 61.8665 96.9892 61.6175 97.2906 61.2322C97.6154 60.8161 97.7778 60.2432 97.7778 59.5117V48.2853C97.7778 46.5955 96.9103 45.7498 95.1754 45.7498H2.60242C0.867474 45.7498 0 46.5955 0 48.2853Z" />
    <path d="M4.58547 84.7405C2.85009 84.7405 1.98262 84.0159 1.98262 82.5682V71.9454C1.98262 70.3358 2.85009 69.531 4.58547 69.531H93.5645C95.2167 69.531 96.0428 70.3358 96.0428 71.9454V73.3334H104.762C106.69 73.3334 108.254 74.8969 108.254 76.8254C108.254 78.7539 106.69 80.3175 104.762 80.3175H96.0428V95.3634C96.0428 96.973 95.2167 97.7778 93.5645 97.7778H74.4796C73.8581 97.7778 73.3534 97.6636 72.9655 97.4351C72.3226 97.0583 72.0012 96.3677 72.0012 95.3634V84.7405H4.58547Z" />
    <path d="M24.4363 37.8091C24.2586 37.9967 24.0744 38.1774 23.883 38.3513C23.7334 38.4877 23.58 38.6207 23.4222 38.7486C23.0092 39.151 22.4307 39.3522 21.6873 39.3522H3.22223C2.23071 39.3522 1.48728 39.0709 0.991521 38.5082C0.578458 37.9438 0.66073 37.2601 1.23919 36.4552L25.7766 1.93189C25.9646 1.63861 26.144 1.37943 26.315 1.15265C26.5196 0.881542 26.7118 0.658172 26.8921 0.482546C27.3052 0.16028 27.8832 0 28.6271 0H48.3313C48.6672 0 48.9635 0.0494482 49.2205 0.148345C49.6588 0.31715 49.9819 0.629185 50.1903 1.08615C50.6034 1.73069 50.5207 2.41444 49.9422 3.13911L24.785 37.4203C24.6721 37.5533 24.5557 37.6829 24.4363 37.8091Z" />
    <path d="M66.0406 29.6195C65.8692 29.2597 65.7891 28.888 65.7997 28.5043C65.8168 27.8888 66.0662 27.2391 66.5483 26.5571L74.8513 15.0885C75.3471 14.3655 75.8842 14.0433 76.4626 14.1234C76.8714 14.1797 77.2802 14.3792 77.689 14.7185C77.8583 14.8583 78.0279 15.022 78.1976 15.2096L96.9103 36.4552C96.9883 36.5405 97.0587 36.6258 97.1217 36.7093L97.1942 36.8116L97.3033 36.9889C97.5996 37.5175 97.5924 38.0239 97.282 38.5082C97.0565 38.8151 96.7453 39.0385 96.3481 39.1783C96.0168 39.2943 95.6259 39.3522 95.1754 39.3522H76.2146C75.3884 39.3522 74.6863 39.151 74.1079 38.7486C73.6121 38.3462 73.1577 37.9046 72.7447 37.4203L66.3006 30.0577C66.1983 29.9144 66.1118 29.7678 66.0406 29.6195Z" />
    <path d="M53.9079 37.4203C53.4948 37.9046 53.0404 38.3462 52.5447 38.7486C52.3064 38.9805 52.0131 39.1459 51.6648 39.2448C51.5084 39.2891 51.3408 39.3198 51.1622 39.3369C51.0493 39.3471 50.9316 39.3522 50.8097 39.3522H32.3446C31.3535 39.3522 30.6097 39.0709 30.1139 38.5082C29.7009 37.9438 29.7836 37.2601 30.362 36.4552L54.8994 1.93189C55.3125 1.28736 55.6842 0.804812 56.0145 0.482546C56.4276 0.16028 57.0061 0 57.7495 0H87.3016C89.2301 0 90.7937 1.56359 90.7937 3.49206C90.7937 5.42054 89.2301 6.98413 87.3016 6.98413H76.2435L53.9079 37.4203Z" />
  </svg>
);

// NormalWord 애니메이션
const normalWordAnimation = keyframes`
  0% {
    transform: translateX(60%) skewX(30deg);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// VectorWord 애니메이션
const vectorWordAnimation = keyframes`
  0% {
    transform: translateX(60%) skewX(30deg);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const vectorWordShakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(6px); }
  50% { transform: translateX(-6px); }
  75% { transform: translateX(3px); }
  100% { transform: translateX(0); }
`;

const NormalWordWrapper = styled.div<{ $delay: string }>`
  opacity: 0;
  animation: ${normalWordAnimation} 0.7s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay};
`;

const VectorWordWrapper = styled.div<{ $delay: string }>`
  opacity: 0;
  animation:
    ${vectorWordAnimation} 0.2s ease-out forwards,
    ${vectorWordShakeAnimation} 0.5s ease-out 0.7s;
  animation-delay: ${({ $delay }) => `calc(${$delay} + 0.5s)`};
`;

const SecondAppearStyle = styled.div<{ $delay: string }>`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 38%;
  right: 15%;
  gap: 15px;
`;

export default SecondAppear;
