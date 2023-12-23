import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.mainBg};
  height: 50px;
  color: ${(props) => props.theme.secondary};
  gap: 1rem;

  .FooterMenuItem {
    cursor: pointer;
    font-size: 30px;
  }
`;

export const FooterLinkContainer = styled.div``;
