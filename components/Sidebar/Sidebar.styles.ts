import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme.colors.mainBg};
  min-width: 350px;
  max-width: 350px;
  overflow: hidden;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-direction: column;
  border-right: 0.1px solid #686868;
  @media (max-width: 1210px) {
    display: none;
  }
`;
