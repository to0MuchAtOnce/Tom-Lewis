import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.mainBg};
  height: 50px;
  color: ${(props) => props.theme.colors.secondary};

  @media (min-width: 1580px) {
    display: none;
  }

  .FooterMenuItem {
    cursor: pointer;
    padding-right: 1rem;
    font-size: 30px;
  }
`;

export const FooterLinkContainer = styled.div``;
