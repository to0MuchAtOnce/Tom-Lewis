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
    color: ${(props) => props.theme.textLight};
    border-radius: 6px;
    font-size: 12px;
    font-weight: 200;
    padding: 4px 5px;
    margin: 0 3px 0 0;
  }

  .photoCategory.series {
    background: red;
  }

  .photoCategory.album {
    background: red;
  }
`;
