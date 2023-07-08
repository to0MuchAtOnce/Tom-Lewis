import styled from 'styled-components';

export const SidebarFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2em 0.1rem;
  width: 100%;
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.secondary};

  .SidebarFooterMenuItem {
    cursor: pointer;
    padding-right: 1rem;
    font-size: 30px;
    fill: ${(props) => props.theme.accent};
  }

  .SidebarFooterMenuItem:last-child {
    padding-right: 0;
    font-size: 30px;
  }

  .SidebarFooterIcon:hover {
    transition: all 0.3s ease-in-out;
  }

  .FooterThemeToggleBtn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 30px;
    padding: 0;
    margin: 0;
  }

  .FooterThemeIcon {
    fill: ${(props) => props.theme.themeIcon};
  }

  .FooterThemeIcon:hover {
    fill: ${(props) => props.theme.accent};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
