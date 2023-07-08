import styled from 'styled-components';

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 10px 0px 5px 10px;
  align-items: center;
  justify-content: space-between;

  & svg {
    height: 20px;
    margin-right: 10px;
    color: ${(props) => props.theme.sidebarBorder};
  }

  &:hover {
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    text-decoration: underline;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    color: ${(props) => props.theme.accent};
  }
`;
