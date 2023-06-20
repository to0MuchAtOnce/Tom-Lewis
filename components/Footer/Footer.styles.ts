import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  background: ${props => props.theme.colors.mainBg};
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.secondary};

  .FooterMenuItem {
    padding-right: 1rem;
    font-size: 30px;
  }
`;

export const FooterLinkContainer = styled.div`
  
`