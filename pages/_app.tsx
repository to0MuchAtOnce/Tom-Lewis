import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import 'prismjs/themes/prism-tomorrow.css';
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/Theme";
import { GlobalStyles } from "../styles/GlobalStyles";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<typeof LightTheme>(LightTheme);

  const toggleTheme = () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === DarkTheme ? "dark" : "light");
  };

  // Use effect not neccasaary here...
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, []);

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