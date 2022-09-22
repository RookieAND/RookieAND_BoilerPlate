import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  margins: {
    xsm: ".25rem",
    sm: ".5rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem"
  },

  paddings: {
    xsm: ".25rem",
    sm: ".5rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem"
  },

  fonts: {
    size: {
      xsm: "1rem",
      sm: "1.4rem",
      base: "1.6rem",
      lg: "2rem",
      xl: "3rem",
      xxl: "4rem",
      title: "6rem"
    },
    weight: {
      light: 100,
      normal: 400,
      bold: 700
    }
  },

  colors: {
    white: "#ffffff",
    black: {
      primary: "#000000",
      secondary: "#191919",
      tertiary: "#333333",
      quaternary: "#4d4d4d",
      quinary: "#666666"
    }
  },

  device: {
    mobile: `@media only screen and (max-width: 425px)`,
    tablet: `@media only screen and (max-width: 768px)`,
    desktop: `@media only screen and (max-width: 1440px)`
  }
};
