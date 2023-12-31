import styled from 'styled-components';

export const PageLayoutContainer = styled.div`
  .headingLg {
    margin-bottom: 0;
  }

  .largeImage {
    width: 100%;
    height: auto;
    max-height: 680px;
    margin: 10px 0 0;
  }

  .smallImageContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .smallImage,
  .smallImage:first-child,
  .smallImage:last-child {
    width: 32.6%;
    height: 32.6%;
    margin: 12px;
  }

  .smallImage:first-child {
    margin: 12px 0;
  }

  .smallImage:last-child {
    margin: 12px 0;
  }

  @media screen and (max-width: 1055px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32.5%;
      height: 32.5%;
    }
  }

  @media screen and (max-width: 960px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32.4%;
      height: 32.4%;
    }
  }

  @media screen and (max-width: 845px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32.3%;
      height: 32.3%;
    }
  }

  @media screen and (max-width: 790px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32.2%;
      height: 32.2%;
    }
  }

  @media screen and (max-width: 725px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32.1%;
      height: 32.1%;
    }
  }

  @media screen and (max-width: 650px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32%;
      height: 32%;
    }
  }

  @media screen and (max-width: 610px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 31.9%;
      height: 31.9%;
    }
  }

  @media screen and (max-width: 580px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32.1%;
      height: 32.1%;
      margin: 10px;
    }
    .smallImage:first-child {
      margin: 10px 0;
    }

    .smallImage:last-child {
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 530px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 32%;
      height: 32%;
    }
  }

  @media screen and (max-width: 500px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 31.9%;
      height: 31.9%;
    }
  }

  @media screen and (max-width: 450px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 31.8%;
      height: 31.8%;
    }
  }

  @media screen and (max-width: 435px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 31.7%;
      height: 31.7%;
    }
  }

  @media screen and (max-width: 430px) {
    .smallImage,
    .smallImage:first-child,
    .smallImage:last-child {
      width: 31.5%;
      height: 31.5%;
    }
  }
`;
