import { Cards as ProjectCard } from './../ProjectCard/ProjectCard.styles';
import styled from 'styled-components';

export const PhotoCards = styled(ProjectCard)`
  && {
    padding: 0;
    border: 0;
    background-color: transparent;
  }

  .photoCardImage {
    border-radius: 8px;
    width: 100%;
    height: auto;
    max-width: 1064px;
    margin-bottom: 5px;
  }

  .photoCardTitle {
    font-size: 22px;
    margin: 0 0 0 3px;
  }

  .photoCardInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .photoCategory {
    color: ${(props) => props.theme.border};
    border: 0.5px solid ${(props) => props.theme.border};
    border-radius: 6px;
    font-size: 12px;
    font-weight: 200;
    padding: 4px 5px;
    margin: 0 3px 0 0;
  }

  .photoCategory:hover {
    color: ${(props) => props.theme.accent};
    border: 0.5px solid ${(props) => props.theme.accent};
  }
`;
