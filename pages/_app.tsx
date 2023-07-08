import { useState } from "react";
import type { AppProps } from "next/app";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/Theme";
import 'prismjs/themes/prism-tomorrow.css';
import { GlobalStyles } from "../styles/GlobalStyles";



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<typeof LightTheme>(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardLayout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
