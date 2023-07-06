import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme.colors.mainBg};
  min-width: 200px;
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 0 4rem 0 0;
  justify-content: space-between;
  flex-direction: column;
  border-right: 0.1px solid ${(props) => props.theme.colors.sidebarBorder};
  @media (max-width: 1580px) {
    display: none;
  }
`;
