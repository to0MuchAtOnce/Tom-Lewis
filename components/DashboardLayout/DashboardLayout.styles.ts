import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBg};
  color: ${(props) => props.theme.colors.textDark};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  width: 100vw;
  max-width: 880px;
  padding: 16px;
  margin: 0 auto;
  text-align: left;
`;
