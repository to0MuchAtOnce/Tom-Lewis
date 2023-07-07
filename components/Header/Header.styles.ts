import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  padding-left: 16px;
  width: 100vw;
  max-width: 880px;
  margin: 0 auto;
  background: ${(props) => props.theme.mainBg};
  height: 50px;
  color: ${(props) => props.theme.secondary};
  @media (min-width: 1440px) {
    display: none;
    margin: 0;
  }

  .MobileMenuItem {
    padding-right: 1em;
  }

  .MobileMenuItem:hover {
    text-decoration: underline;
  }

  .MobileMenuItem:last-child {
    padding-right: 0em;
  }

  .HeaderToggleThemeButton {
    display: flex;
    background: ${(props) => props.theme.themeBtn};
    background: none;
    border: none;
    cursor: pointer;
    font-size: 28px;
    padding: 0;
    margin: 0;
  }

  .HeaderThemeIcon {
    fill: ${(props) => props.theme.themeIcon};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  list-style-type: none;
`;
