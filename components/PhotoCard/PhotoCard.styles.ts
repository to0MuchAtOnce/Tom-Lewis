import { Cards as ProjectCard } from './../ProjectCard/ProjectCard.styles';
import styled from 'styled-components';

export const PhotoCards = styled(ProjectCard)`
  && {
    padding: 0;
    border: 0;
    background-color: transparent;
  }

  .photoCardImage {
    width: 94vw;
    height: auto;
    border-radius: 8px;
    max-width: 1064px;
    margin-bottom: 5px;
  }

  .card {
  }
`;
