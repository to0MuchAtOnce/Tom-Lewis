import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface GlobalStylesProps {
  theme: DefaultTheme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

* {
  box-sizing: border-box;
}

html,
body {
  font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.mainBg};
  font-size: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.textLink {
  color: ${(props) => props.theme.accent};
  text-decoration: underline;
}

.textLink:hover {
  color: ${(props) => props.theme.mainBg};
  background: ${(props) => props.theme.accent};
  text-decoration: underline;
}

.email {
  font-weight: 500;
  text-decoration: underline;
}

.headingXl {
  font-size: 2.1em;
  margin-bottom: -0.2em;
}

time {
  font-size: 1em;
  margin-left: 0.3em;
}

.headingLg {
  font-size: 2.5rem;
  letter-spacing: 0.3px;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 1rem 0;
}

.list {
  list-style: none;
  padding: 0;
}

.listItem {
  display: flex;
  justify-content: space-between;
  margin: 0;
  letter-spacing: 0.2px;
  color: ${(props) => props.theme.boldHeading};
  font-size: 1em;
  font-weight: 500;
  border-bottom: 0.5px solid #959595;
  padding: 0.35em;
}

.listItem:hover {
  color: ${(props) => props.theme.accent};
  text-decoration: underline;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.para {
  font-size: 1em;
  line-height: 1.6em;
}

.btn-small {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid ${(props) => props.theme.cardBorder};
  border-radius: 4px;
}

.padding1px {
  padding-top: 1px;
}

.paddingLe .listItem {
  margin: 0 0 1.25rem;
}

.PostDate {
  display: block;
  color: #959595;
}

.postText {
  white-space: normal;
  letter-spacing: 0.1px;
}

.footerIconColor {
color: ${(props) => props.theme.footerIcon};
}

.footerIconColor:hover {
  color: ${(props) => props.theme.footerIconHover};
}

.full-stop {
    font-size: 1rem;
    color: ${(props) => props.theme.accent};
    font-weight: 900;
  }

@media (max-width: 400px) {
  .Date {
    display: none;
  }

  .PostDate {
    display: block;
    color: #959595;
  }
}
`;
