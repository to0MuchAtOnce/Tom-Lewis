import styled from 'styled-components';

export const SidebarFooterContainer = styled.footer`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 0.2em;
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
