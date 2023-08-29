import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import 'prismjs/themes/prism-tomorrow.css';
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/Theme";
import { GlobalStyles } from "../styles/GlobalStyles";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? DarkTheme : LightTheme;
    setTheme(initialTheme)
  }, []);


  const toggleTheme = () => {
    const newTheme = theme === DarkTheme ? LightTheme : DarkTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme === DarkTheme ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardLayout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
        <Analytics />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;