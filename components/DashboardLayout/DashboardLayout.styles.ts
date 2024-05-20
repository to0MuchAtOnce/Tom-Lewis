import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBg};
  color: ${(props) => props.theme.textDark};
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  width: 100vw;
  max-width: 780px;
  padding: 16px;
  margin: 0 auto;
  text-align: left;
`;
