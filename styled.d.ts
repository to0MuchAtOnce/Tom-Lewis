import 'styled-components';

declare module 'styled-components' {
  export interface LightMode {
    colors: {
      primary: string;
      secondary: string;
      textDark: string;
      textLight: string;
      mainBg: string;
      greyBg: string;
      themeBtn: string;
      themeIcon: string;
      accent: string;
    };
  }
}

declare module 'styled-components' {
  export interface DarkMode {
    colors: {
      primary: string;
      secondary: string;
      textDark: string;
      textLight: string;
      mainBg: string;
      greyBg: string;
      themeBtn: string;
      themeIcon: string;
      accent: string;
    };
  }
}
