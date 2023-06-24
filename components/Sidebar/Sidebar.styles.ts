import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme.colors.mainBg};
  min-width: 350px;
  max-width: 350px;
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 0 4rem 0 0;
  padding: 0 10px;
  justify-content: space-between;
  flex-direction: column;
  border-right: 0.1px solid #686868;
  @media (max-width: 1800px) {
    display: none;
  }
`;
