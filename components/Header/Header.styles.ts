import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  padding-left: 16px;
  width: 100vw;
  max-width: 780px;
  margin: 0 auto;
  background: ${(props) => props.theme.mainBg};
  height: 50px;
  color: ${(props) => props.theme.secondary};

  @media (max-width: 413px) {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .MobileMenuItem {
    font-weight: 500;
    margin-right: 1em;
  }

  .MobileMenuItem:hover {
    color: ${(props) => props.theme.accent};
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
    font-size: 1.75em;
    padding: 0;
    margin: 0;
  }

  .HeaderThemeIcon {
    fill: ${(props) => props.theme.themeIcon};
  }
`;

export const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  list-style-type: none;

  .selected {
    color: ${(props) => props.theme.accent};
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  font-size: 1.6em;
  font-weight: 700;

  :hover {
    cursor: default;
  }

  .LogoFullStop {
    font-size: 1.02em;
    color: ${(props) => props.theme.accent};
    font-weight: 900;
    margin-left: 3px;
  }

  @media (max-width: 485px) {
    font-size: 1.4rem;
    .LogoFullStop {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 435px) {
    font-size: 1.2rem;
    .LogoFullStop {
      font-size: 1.2rem;
    }

    @media (max-width: 413px) {
      display: none;
    }
  }
`;
