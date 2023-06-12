import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  padding: 0 2em;
  height: 50px;
  color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 1211px) {
    display: flex;
    align-items: center;
    }
  }

  .MobileMenuItem {
    padding-right: 2em;
  @media (min-width: 1211px) {
    display: none
    }
  }


  .MobileMenuItem:last-child {
    padding-right: 0em;
`;


export const IconContainer = styled.div`
  padding: 7px;

  & svg {
    height: 30px;
    @media (max-width: 1210px) {
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
  @media(max-width: 1210px) {
    padding-right: 150px;
  }
`;

export const LinkContainer = styled.div`
list-style-type: none;
}
`;
