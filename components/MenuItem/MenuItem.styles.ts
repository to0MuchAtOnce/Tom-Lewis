import styled from 'styled-components';

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 10px 0px 10px 5px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid ${(props) => props.theme.sidebarBorder};

  & svg {
    height: 20px;
    margin-right: 10px;
    color: ${(props) => props.theme.sidebarBorder};
  }

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme.mainBg};
    color: ${(props) => props.theme.textLight};
  }
`;
