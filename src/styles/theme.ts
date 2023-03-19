import type { DefaultTheme } from 'styled-components';

const colors = {
  grayscale: {
    gray100: '#D9D9D9',
    gray300: '#9C9C9C',
    gray500: '#666666',
    dark: '#0F0F0F',
    white: '#FFFFFF',
  },
  primary: {
    main: '#5A90FF',
    caption: '#FF6442',
  },
};

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

// FIXME: 디자인 시스템 적용 방식 변경 필요
const fontSize = {
  sm: '14px',
  base: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  title: '96px',
};

const fonts = {
  weight: fontWeight,
  size: fontSize,
};

const devices = {
  mobile: `@media only screen and (max-width: 425px)`,
  tablet: `@media only screen and (max-width: 768px)`,
  desktop: `@media only screen and (max-width: 1440px)`,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  devices,
};

export type ColorType = typeof colors;
export type FontType = typeof fonts;
export type DeviceType = typeof devices;
