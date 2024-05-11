import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'prismjs/themes/prism-tomorrow.css';
import DashboardLayout from '../components/DashboardLayout/DashboardLayout';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const savedTheme = localStorage.getItem('theme');
      const initialTheme = savedTheme === 'light' ? LightTheme : DarkTheme;
      setTheme(initialTheme);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme === LightTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardLayout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default MyApp;
