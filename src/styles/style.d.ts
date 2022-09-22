import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    margins: {
      xsm: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };

    paddings: {
      xsm: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };

    fonts: {
      size: {
        xsm: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        xxl: string;
        title: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
      };
    };

    colors: {
      white: string;
      black: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
      };
    };

    // 미디어 쿼리의 중복 코드를 줄이기 위해 선언된 변수
    device: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
