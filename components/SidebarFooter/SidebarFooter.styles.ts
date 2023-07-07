import styled from 'styled-components';

export const SidebarFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.2em;
  width: 100%;
  background: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.secondary};

  .SidebarFooterMenuItem {
    cursor: pointer;
    padding-right: 1rem;
    font-size: 30px;
  }

  .SidebarFooterMenuItem:last-child {
    padding-right: 0;
    font-size: 30px;
  }

  .SidebarFooterIcon:hover {
    fill: #427fac;
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
