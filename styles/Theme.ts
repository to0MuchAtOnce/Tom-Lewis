import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    primary: string;
    secondary: string;
    card: string;
    cardBorder: string;
    textDark: string;
    textLight: string;
    mainBg: string;
    codeBgInline: string;
    codeTextInline: string;
    codeBorderInline: string;
    greyBg: string;
    themeBtn: string;
    themeIcon: string;
    sidebarborder: string;
    accent: string;
    footerIcon: string;
    footerIconHover: string;
  }
}

export const LightTheme: DefaultTheme = {
  primary: '#292a3b',
  secondary: '#696969',
  card: '#ffffff',
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
  sidebarBorder: '#b1b1b1',
  accent: '#6590ab',
  footerIcon: '#737373',
  footerIconHover: '#4c96c1',
};

export const DarkTheme: DefaultTheme = {
  primary: '#292a3b',
  secondary: '#dedede',
  card: '#2e3135',
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
  sidebarBorder: '#5e5e5e',
  accent: '#6590ab',
  footerIcon: '#737373',
  footerIconHover: '#4c96c1',
};
