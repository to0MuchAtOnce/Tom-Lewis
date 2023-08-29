import styled from 'styled-components';

export const PostContainer = styled.div`
  p {
    line-height: 1.6;
    padding: 5px 0;
  }

  pre {
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(44, 44, 44, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
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
    background: ${props => props.theme.codeBgInline};
    color: ${props => props.theme.codeTextInline};
    border: 1px solid ${props => props.theme.codeBorderInline};
    border-radius: 5px;
    padding: 0.15rem 0.21rem;
  }

  .post-link {
    color: ${props => props.theme.accent};
    text-decoration: underline;
  }

  .post-link:hover {
    text-decoration-color: #eee;
  }

  .full-stop {
    font-size: 1rem;
    color: ${props => props.theme.accent};
    font-weight: 900;
  }
`;
