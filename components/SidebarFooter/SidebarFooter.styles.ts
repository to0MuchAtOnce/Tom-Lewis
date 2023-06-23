import styled from 'styled-components';

export const SidebarFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SidebarFooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: red;
`;

export const ToggleThemeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background: blue;
`;
