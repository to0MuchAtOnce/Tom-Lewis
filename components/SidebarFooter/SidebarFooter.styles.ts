import styled from 'styled-components';

export const SidebarFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.mainBg};
  color: ${(props) => props.theme.colors.secondary};

  .SidebarFooterMenuItem {
    padding-right: 1rem;
    font-size: 30px;
  }

  .SidebarFooterIcon:hover {
    fill: red;
    transition: all 0.3s ease-in-out;
  }
`;

export const FooterLinkContainer = styled.div``;
