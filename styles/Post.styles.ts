import styled from 'styled-components';

export const PostContainer = styled.div`
  p {
    line-height: 1.5;
    padding: 5px 0;
  }

  pre.language-tsx {
    border-radius: 7px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin: 10px 0;
  }

  code {
    /* color: #363738; */
    font-size: 13px;
    border: 0.9px solid #2d2d2d;
    padding: 2px 0px;
    border-radius: 4px;
  }

  .inline-code {
    background: #353536;
    border: 1px solid #555657;
    border-radius: 5px;
    padding: 0.15rem 0.21rem;
  }

  .full-stop {
    font-size: 1rem;
    color: ${props => props.theme.accent};
    font-weight: 900;
  }
`;
