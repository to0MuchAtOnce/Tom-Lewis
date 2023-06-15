import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: ${(props) => props.theme.colors.mainBg};
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  max-width: 200px;
  transition: width 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1210px) {
    display: none;
  }
`;
