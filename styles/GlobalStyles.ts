import { createGlobalStyle, Theme } from 'styled-components';

interface GlobalStylesProps {
  theme: Theme;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
* {
  box-sizing: border-box;
}

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.mainBg};
}

a {
  color: inherit;
  text-decoration: none;
}

.textLink {
  color: ${props => props.theme.accent};
  text-decoration: underline;
}

.email {
  text-decoration: underline;
}

.headingXl {
  margin-bottom: 5px;
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
  font-size: 16px;
  font-weight: 400;
  border-bottom: 0.5px solid #959595;
  padding: 0.35em;
}

.listItem:hover {
  text-decoration: underline;
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
color: ${props => props.theme.footerIcon};
}

.footerIconColor:hover {
  color: ${props => props.theme.footerIconHover};
}

@media (max-width: 700px) {
  .Date {
    display: none;
  }

  .PostDate {
    display: block;
    color: #959595;
  }
}
`;
