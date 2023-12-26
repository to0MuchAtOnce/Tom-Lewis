import styled from 'styled-components';

export const PageLayoutContainer = styled.div`
  .smallImageContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .largeImage {
    width: 100%;
    height: auto;
    max-height: 680px;
    margin: 10px 0;
  }

  .smallImage {
    width: 32.4%;
    height: 32.4%;
    margin: 14px;
  }

  .headingLg {
    margin-bottom: 0;
  }

  .smallImage:first-child {
    width: 32.4%;
    height: 32.4%;
    margin: 14px 0;
  }

  .smallImage:last-child {
    width: 32.4%;
    height: 32.4%;
    margin: 14px 0;
  }

  @media screen and (max-width: 980px) {
    .smallImage {
      width: 32%;
      height: 32%;
      margin: 14px;
    }

    .smallImage:first-child {
      width: 32%;
      height: 32%;
      margin: 14px 0;
    }

    .smallImage:last-child {
      width: 32%;
      height: 32%;
      margin: 14px 0;
    }
  }

  @media screen and (max-width: 620px) {
    .smallImage {
      width: 31%;
      height: 31%;
      margin: 10px;
    }

    .smallImage:first-child {
      width: 31%;
      height: 31%;
      margin: 10px 0;
    }

    .smallImage:last-child {
      width: 31%;
      height: 31%;
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 500px) {
    .largeImage {
      margin: 0;
    }

    .smallImage {
      width: 32%;
      height: 32%;
      margin: 10px 10px;
    }

    .smallImage:first-child,
    .smallImage:last-child {
      width: 32%;
      height: 32%;
      margin: 10px 0;
    }
  }
`;
