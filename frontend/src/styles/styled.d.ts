import 'styled-components';

interface RelaxColor {
  main: string;
  light: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    mainColor: string;
    relaxColor: RelaxColor;
  }
}
