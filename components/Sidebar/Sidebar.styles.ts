import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  background: ${(props) => props.theme.colors.mainBg};
  max-width: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1210px) {
    display: none;
  }
`;
