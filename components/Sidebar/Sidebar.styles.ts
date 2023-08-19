import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background: ${props => props.theme.mainBg};
  min-width: 250px;
  max-width: 250px;
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 0 1rem 0 0;
  justify-content: space-between;
  flex-direction: column;
  border-right: 0.1px solid ${props => props.theme.sidebarBorder};
  @media (max-width: 1600px) {
    display: none;
  }

  .logo {
    display: flex;
    padding: 1rem;
  }
`;
