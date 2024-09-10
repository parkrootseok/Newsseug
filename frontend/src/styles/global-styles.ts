import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "Pretendard-Black";
  src: url("../fonts/Pretendard-Black.ttf");
}
@font-face {
  font-family: "Pretendard-Bold";
  src: url("../fonts/Pretendard-Bold.ttf");
}
@font-face {
  font-family: "Pretendard-ExtraBold";
  src: url("../fonts/Pretendard-ExtraBold.ttf");
}
@font-face {
  font-family: "Pretendard-ExtraLight";
  src: url("../fonts/Pretendard-ExtraLight.ttf");
}
@font-face {
  font-family: "Pretendard-Light";
  src: url("../fonts/Pretendard-Light.ttf");
}
@font-face {
  font-family: "Pretendard-Medium";
  src: url("../fonts/Pretendard-Medium.ttf");
}
@font-face {
  font-family: "Pretendard-Regular";
  src: url("../fonts/Pretendard-Regular.ttf");
}
@font-face {
  font-family: "Pretendard-SemiBold";
  src: url("../fonts/Pretendard-SemiBold.ttf");
}
@font-face {
  font-family: "Pretendard-Thin";
  src: url("../fonts/Pretendard-Thin.ttf");
}

body {
    font-family: "Pretendard-Regular", sans-serif;
  }
`;

export default GlobalStyle;
