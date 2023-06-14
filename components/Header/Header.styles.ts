import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.mainBg};
  padding: 0 2em
  height: 50px;
  color: ${(props) => props.theme.colors.secondary};
    }
  }

  .MobileMenuItem {
    padding-right: 1em;
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
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  }
`;

export const LogoContainer = styled.div`
`;

export const LinkContainer = styled.div`
list-style-type: none;
}
`;
