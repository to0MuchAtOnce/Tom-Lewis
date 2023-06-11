import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  padding: 0 1em;
  height: 50px;
  color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }
  }

  .MobileMenuItem {
  @media (min-width: 600px) {
    display: none
  }
  }
`;

export const IconContainer = styled.div`
  padding: 7px;

  & svg {
    height: 30px;
    @media (max-width: 600px) {
      display: none;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const FlexContainer = styled.div`
  @media(min-width: 300px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  @media(max-width: 600px) {
    padding-right: 100px;
  }
`;

export const LinkContainer = styled.div`
list-style-type: none;
}
`;
