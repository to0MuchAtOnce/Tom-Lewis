---
title: 'Implementing a theme switcher'
date: '2023-06-20'
---

These days more and more websites are offering dark mode. I personally look for it on every site I visit, that’s if it’s not already the only theme available. For my site I wanted to give the user a choice of theme based on their preference. In this tutorial I’ll show you how I implemented a theme switcher for this site which saves the selected theme to localStorage for the next time you visit.

I began by creating a state variable to track the current theme in `_app.tsx` using the `useState` hook. The `theme` variable holds the current theme and updates it accordingly. When triggered, if the theme is set to `LightTheme` it will be set to `DarkTheme`, and vice versa. I initialised it with the default app theme, `LightTheme` and then passed it as a prop to`DashboardLayout.tsx`.

Inside the `ThemeProvider` component the `theme` variable is passed as the value for the theme, making the theme variable available throughout the component tree, allowing all other components to access and use the theme.

#### _app.tsx 
```tsx
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { LightTheme, DarkTheme } from "../styles/Theme";
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

```

Inside the `DashboardLayout` component I added the `toggleThem` function as a prop. Allowing it to be passed down to child components, like the header or the sidebar, where the theme toggle buttons live.

#### DashboardLayout.tsx
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

I added the `toggleTheme` to the `HeaderProps` type to include the `toggleTheme` function prop. The toggle theme function is attached to the `onClick` event of the theme toggle button. When the button is clicked the functionality is triggered. Also the function in `_app.tsx` is executed which updates the `theme` state based on its current value.

This then triggers a re-render of the components wrapped in the `ThemeProvider`, updating the app and applying the new theme to the styled components.

#### Header/index.tsx
```tsx
type HeaderProps = {
  toggleTheme: () => void;
};


export default function Header({ toggleTheme }: HeaderProps) {

  return (
    <HeaderContainer>
        <HeaderLinkContainer className="MobileMenuWrapper">
          {/* nav links */}
          <IconContext.Provider
            value={{ className: "HeaderThemeIcon" }}>
            <button className="HeaderToggleThemeButton" onClick={toggleTheme>
              <MdDarkMode />
            </button>
          </IconContext.Provider>
        </HeaderLinkContainer>
    </HeaderContainer>
  );
}

```

### Saving Theme to localStorage

Now lets modify the `_app.tsx` code to make sure our preferred theme is saved to localStorage in the browser, ready for the next time we visit.

Here is the previous `_app.tsx` code for easy comparison:

```tsx
import { useEffect, useState } from "react";

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
```

And here is the implementation, saving the theme to localStorage:

```tsx
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<typeof LightTheme>(LightTheme);

  const toggleTheme = () => {
    const newTheme = theme === LightTheme ? DarkTheme : LightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === DarkTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, []);
```

These simple, but effective changes allow the browser to store our theme preference ensuring persistence across sessions and page reloads.

First we import the `useEffect` hook from react with an empty dependency array, making sure the the effect only runs once when the site renders.

Inside the the `useEffect` we retrieve the saved theme from localStorage using `localStorage.getItem("theme")`.

If a saved theme exists, we update the state with the corresponding theme.

```tsx
if (savedTheme === "dark") {
  setTheme(DarkTheme);
} else {  
setTheme(LightTheme);
}
```

This ensures the app displays the correct theme based on the previous theme selection.

Now the app retrieves the information every time it's loaded, setting the the preferred theme resulting in a cohesive user experience.

### Conclusion

To summarise, this code sets up a state variable `theme` and a `toggleTheme` function to handle the toggling of themes. The theme state is passed down via the `ThemeProvider` to make it accessible to styled components. The `toggleTheme` function is passed as a prop to the Header component, where it is attached to the theme toggle button's onClick event. When the button is clicked, the theme state is updated, triggering a re-render and applying the new theme to the app.