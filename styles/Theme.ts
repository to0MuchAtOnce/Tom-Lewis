import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    accent: string;
    primary: string;
    secondary: string;
    boldHeading: string;
    white: string;
    border: string;
    cardBorder: string;
    cardBackground: string;
    textDark: string;
    textLight: string;
    mainBg: string;
    codeBgInline: string;
    codeTextInline: string;
    codeBorderInline: string;
    greyBg: string;
    themeBtn: string;
    themeIcon: string;
    footerIcon: string;
    footerIconHover: string;
  }
}

export const LightTheme: DefaultTheme = {
  accent: '#426b85',
  primary: '#292a3b',
  secondary: '#696969',
  boldHeading: '#656565',
  white: '#ffffff',
  border: '#676666',
  cardBackground: '#ffffff',
  cardBorder: '#e0e0e0',
  textDark: '#4e4e4e',
  textLight: '#e4e4e4',
  mainBg: '#f4f2f2',
  codeBgInline: '#7b7b7b',
  codeTextInline: '#FFF',
  codeBorderInline: '#6c6a6a',
  greyBg: '#d8dcd6',
  themeBtn: '#737373',
  themeIcon: '#6590ab',
  footerIcon: '#737373',
  footerIconHover: '#4c96c1',
};

export const DarkTheme: DefaultTheme = {
  accent: '#67abd5',
  primary: '#292a3b',
  secondary: '#dedede',
  boldHeading: '#c5c5c5',
  white: '#ffffff',
  border: '#b4b4b4',
  cardBackground: '#2e3135',
  cardBorder: '#606060',
  textDark: '#d3d3d3',
  textLight: '#e4e4e4',
  mainBg: '#25292E',
  codeBgInline: '#353536',
  codeTextInline: '#D3D3D3',
  codeBorderInline: '#555657',
  greyBg: '#d8dcd6',
  themeBtn: '#737373',
  themeIcon: '#6590ab',
  footerIcon: '#737373',
  footerIconHover: '#4c96c1',
};
