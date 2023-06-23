import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  width: 100vw;
  max-width: 880px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.mainBg};
  height: 50px;
  color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 1210px) {
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
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const HeaderLinkContainer = styled.div`
  align-items: center;
  list-style-type: none;
  @media (min-width: 1210px) {
    display: none;
  }
`;
