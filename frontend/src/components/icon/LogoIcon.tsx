import styled from 'styled-components';
import { LogoHeaderProps } from 'types/common/layout';

function LogoIcon({ size = 24 }: Readonly<LogoHeaderProps>) {
  return (
    <StyledSVG
      $size={size}
      viewBox="0 0 40 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="&#235;&#161;&#156;&#234;&#179;&#160;">
        <path
          id="Vector"
          d="M14.8486 14.086V17.5577C14.8486 17.8526 14.6984 18 14.398 18H11.1534C10.8529 18 10.7027 17.8526 10.7027 17.5577V14.086H7.07506V17.5577C7.07506 17.8526 6.92485 18 6.62442 18H3.37981C3.07938 18 2.92916 17.8526 2.92916 17.5577V14.086H0.473173C0.157724 14.086 0 13.9238 0 13.5995V11.145C0 10.8501 0.157724 10.7027 0.473173 10.7027H17.3046C17.6201 10.7027 17.7778 10.8501 17.7778 11.145V13.5995C17.7778 13.9238 17.6201 14.086 17.3046 14.086H14.8486ZM5.1373 5.52825H16.6962C17.0117 5.52825 17.1694 5.67567 17.1694 5.97051V8.55774C17.1694 8.85258 17.0117 9 16.6962 9H1.1266C0.976388 9 0.856217 8.96314 0.766089 8.88943C0.675961 8.81572 0.638408 8.69779 0.653429 8.53563V0.420147C0.683472 0.140049 0.841196 0 1.1266 0H4.66413C4.9946 0 5.15233 0.154791 5.1373 0.464373V5.52825Z"
        />
        <g id="Intersect">
          <path d="M20.3175 8.88888V10.9556C20.3175 11.2666 20.4752 11.4223 20.7906 11.4223H37.6221C37.6744 11.4223 37.7224 11.4182 37.766 11.4098C37.8716 11.3891 37.9518 11.3432 38.0066 11.2723C38.0657 11.1957 38.0952 11.0902 38.0952 10.9556V8.88888C38.0952 8.57781 37.9375 8.42212 37.6221 8.42212H20.7906C20.4752 8.42212 20.3175 8.57781 20.3175 8.88888Z" />
          <path d="M21.1512 15.6C20.8357 15.6 20.6779 15.4666 20.6779 15.2001V13.2445C20.6779 12.9482 20.8357 12.8 21.1512 12.8H37.3292C37.6296 12.8 37.7798 12.9482 37.7798 13.2445V13.5H39.3651C39.7157 13.5 40 13.7878 40 14.1429C40 14.4979 39.7157 14.7857 39.3651 14.7857H37.7798V17.5555C37.7798 17.8518 37.6296 18 37.3292 18H33.8592C33.7462 18 33.6544 17.979 33.5839 17.9369C33.467 17.8675 33.4086 17.7404 33.4086 17.5555V15.6H21.1512Z" />
          <path d="M24.7604 6.96031C24.7281 6.99484 24.6946 7.02811 24.6598 7.06013C24.6326 7.08524 24.6047 7.10972 24.576 7.13326C24.5009 7.20734 24.3958 7.24438 24.2606 7.24438H20.9033C20.723 7.24438 20.5879 7.19259 20.4977 7.08901C20.4226 6.98511 20.4376 6.85923 20.5428 6.71108L25.0041 0.355643C25.0383 0.301653 25.0709 0.253941 25.102 0.212193C25.1392 0.162284 25.1742 0.121163 25.2069 0.0888323C25.282 0.0295061 25.3871 0 25.5224 0H29.105C29.166 0 29.2199 0.00910295 29.2666 0.0273089C29.3463 0.0583845 29.4051 0.115827 29.443 0.199951C29.5181 0.318603 29.503 0.444475 29.3979 0.577881L24.8238 6.88874C24.8033 6.91322 24.7821 6.93708 24.7604 6.96031Z" />
          <path d="M32.3248 5.45267C32.2937 5.38644 32.2791 5.31801 32.281 5.24738C32.2841 5.13407 32.3295 5.01447 32.4171 4.88892L33.9268 2.77766C34.0169 2.64457 34.1146 2.58524 34.2198 2.59999C34.2941 2.61035 34.3684 2.64708 34.4427 2.70954C34.4735 2.73528 34.5044 2.76542 34.5352 2.79994L37.9375 6.71108C37.9517 6.72677 37.9645 6.74247 37.976 6.75785L37.9891 6.77668L38.009 6.80932C38.0628 6.90663 38.0615 6.99986 38.0051 7.08901C37.9641 7.14551 37.9075 7.18663 37.8353 7.21237C37.7751 7.23371 37.704 7.24438 37.6221 7.24438H34.1746C34.0244 7.24438 33.8968 7.20734 33.7916 7.13326C33.7015 7.05919 33.6189 6.97789 33.5438 6.88874L32.3721 5.53334C32.3535 5.50697 32.3378 5.47998 32.3248 5.45267Z" />
          <path d="M30.1189 6.88874C30.0438 6.97789 29.9612 7.05919 29.871 7.13326C29.8277 7.17595 29.7744 7.2064 29.7111 7.22461C29.6826 7.23277 29.6522 7.23842 29.6197 7.24156C29.5991 7.24344 29.5777 7.24438 29.5556 7.24438H26.1983C26.0181 7.24438 25.8829 7.19259 25.7927 7.08901C25.7176 6.98511 25.7327 6.85923 25.8378 6.71108L30.2992 0.355643C30.3743 0.236991 30.4419 0.148158 30.5019 0.0888323C30.577 0.0295061 30.6822 0 30.8174 0H36.1905C36.5411 0 36.8254 0.287842 36.8254 0.642857C36.8254 0.997872 36.5411 1.28571 36.1905 1.28571H34.1799L30.1189 6.88874Z" />
        </g>
      </g>
    </StyledSVG>
  );
}

function LogoIconN() {
  return (
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
}

function LogoIconS() {
  return (
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
}

export { LogoIconN, LogoIconS };
export default LogoIcon;

const StyledSVG = styled.svg<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size / 2.22}px;
  /* margin: 10px 0; */
  path {
    fill: ${({ theme }) => theme.mainColor};
  }
`;
