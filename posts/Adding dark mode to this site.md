---
title: 'Adding dark mode to this site'
date: '2020-01-01'
---

I managed to implement dark mode on the website by creating a state variable to track the current theme in **_app.tsx** using the **useState** hook. The **theme** variable holds the current theme and updates it accordingly. Meaning; if the theme is set to **LightTheme** it will be set to **DarkTheme** when triggered, and vice versa. I initialised it with the default app theme, **LightTheme** and then passed it as a prop to**DashboardLayout.tsx**.

Inside the **ThemeProvider** component the **theme** variable is passed as the value for the theme, making the theme variable avalible throughout the component tree, allowing all other components to access and use the theme.

### _app.tsx
```tsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../styles/lightMode";
import { DarkTheme } from "../styles/darkMode";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<typeof LightTheme>(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default MyApp;
```

 Inside the **DashboardLayout** component I added the **toggleThem** function as a prop. Allowing it to be passed down to child components, like the header or the sidebar, where the theme toggle buttons live.

**DashboardLayout.tsx**
```tsx
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./DashboardLayout.styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
  toggleTheme: () => void;
};

export default function DashboardLayout({ children, toggleTheme }: DashboardLayoutProps) {

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <Content>
        <Sidebar toggleTheme={toggleTheme} />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
}
```

I added the **toggleTheme** to the **HeaderProps** type to include the **toggleTheme** function prop. The toggle theme function is attached to the **onClick** event of the theme toggle button. When the button is clicked the functionality is triggered by the function call. Also the function in **_app.tsx** is executed which updates the **theme** state based on its current value.

This then triggers a re-render of the components wrapped in the **ThemeProvider**, updating the app and applying the new theme to the styled components.

### Header/index.tsx
```tsx
type HeaderProps = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  const ThemeToggleColor = "#dedede";

  return (
    <HeaderContainer>
        <HeaderLinkContainer className="MobileMenuWrapper">
          {nav links}
          <IconContext.Provider
            value={{ className: "HeaderThemeIcon", color: ThemeToggleColor }}>
            <button className="HeaderToggleThemeButton" onClick={toggleTheme}>
              <MdDarkMode />
            </button>
          </IconContext.Provider>
        </HeaderLinkContainer>
    </HeaderContainer>
  );
}
```