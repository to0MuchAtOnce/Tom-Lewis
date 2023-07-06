import styled from 'styled-components';

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 10px 0px 10px 5px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.sidebarBorder};

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.mainBg};
    color: ${(props) => props.theme.colors.textLight};
  }
`;
