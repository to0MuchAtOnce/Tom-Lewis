import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    primary: string;
    secondary: string;
    textDark: string;
    textLight: string;
    mainBg: string;
    greyBg: string;
    themeBtn: string;
    themeIcon: string;
    accent: string;
    sidebarBorder: string;
  }
}

export const LightTheme: DefaultTheme = {
  primary: '#292a3b',
  secondary: '#414141',
  textDark: '#4e4e4e',
  textLight: '#e4e4e4',
  mainBg: '#f3eeee',
  greyBg: '#d8dcd6',
  themeBtn: '#737373',
  themeIcon: '#eba93e',
  accent: '#4e7fc5',
  sidebarBorder: '#686868',
};

export const DarkTheme: DefaultTheme = {
  primary: '#292a3b',
  secondary: '#dedede',
  textDark: '#d3d3d3',
  textLight: '#e4e4e4',
  mainBg: '#25292E',
  greyBg: '#d8dcd6',
  themeBtn: '#737373',
  themeIcon: '#eba93e',
  accent: '#4e7fc5',
  sidebarBorder: '#686868',
};
