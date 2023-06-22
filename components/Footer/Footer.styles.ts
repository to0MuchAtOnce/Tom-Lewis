import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  background: ${(props) => props.theme.colors.mainBg};
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 1210px) {
    display: none;
  }

  .FooterMenuItem {
    padding-right: 1rem;
    font-size: 30px;
  }

  .FooterIcon:hover {
    fill: red;
    transition: all 0.3s ease-in-out;
  }
`;

export const FooterLinkContainer = styled.div``;
