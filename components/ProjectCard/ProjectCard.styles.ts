import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  flex: 1;
  background: ${props => props.theme.card};
  color: ${props => props.theme.textDark};
  border: 1px solid ${props => props.theme.cardBorder};
  border-radius: 8px;
  margin: 15px 0;
  padding: 15px;
  min-width: 350px;
  flex-wrap: wrap;
  margin: 20px;

  /* .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  } */

  .cardTitle {
    font-size: 18px;
    margin: 0;
  }

  .cardTitle:hover {
    color: ${props => props.theme.accent};
    text-decoration: underline;
  }

  .btn-small {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
  }

  .btn-small-txt {
    padding-right: 5px;
  }
`;
