import styled from 'styled-components';
import { media } from '../../config/config';

import { DefaultContainer } from '../helpers';

export const PortfolioContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 1020px;
  margin-top: 0;
  /* ${media.tablet`
    margin: 2rem auto;
  `}; */
  ${media.laptop`
    margin: 2rem auto;
  `};
  ${media.hd`
    max-width: 1320px;
  `};
`;

export const PortfolioItemWrapper = styled.article`
  /* max-width: 100%;
  max-height: 100%; */
  /* width: 400px;
  margin:
  height: 240px; */
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0.75rem 0;
  border-radius: ${props => props.theme.portfolioRadius};
  /* ANIMATION */
  box-shadow: none;
  border-bottom: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      margin-left: 0.6rem;
      font-size: 2.2rem;
      font-weight: 600;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      /* transition: font-size 100ms linear 0s; */
    }
  }
  .gatsby-image-wrapper {
    opacity: 0.3;
    border-radius: ${props => props.theme.portfolioRadius};
    width: 90vw;
    height: 60vw;
    max-width: 600px;
    max-height: 400px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
  &:hover {
    box-shadow: ${props => props.theme.colorPrimary}40 0px 8px 20px;
    /* background: transparent; */
    transform: translateY(-3px);
    /* .gatsby-image-wrapper {
      opacity: 0.3;
    } */
    /* div {
      opacity: 1;
    } */
    .overlay h3 {
      font-size: 2.3rem;
    }
    .gatsby-image-wrapper {
      opacity: 0.25;
    }
  }
  ${media.tablet`
    margin: 10px;
    .overlay h3 {
      font-size: 2.5rem;
    }
    &:hover {
      .overlay h3 {
        font-size: 2.6rem;
      }
    }
    .gatsby-image-wrapper {
      margin: 0;
      width: 47vw;
      height: 31vw;
      max-width: 480px;
      max-height: 320px;
    }
  `};
  ${media.tablet`
    .overlay h3 {
      font-size: 2.7rem;
    }
    &:hover {
      .overlay h3 {
        font-size: 2.8rem;
      }
    }
  `} ${media.hd`
    max-width: 1400px;
    .gatsby-image-wrapper {
      margin: 0;
      width: 420px;
      height: 280px;
      /* max-width: 480px;
      max-height: 320px; */
    }
  `};
`;

// export const PortfolioItemOverlay = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   /* bottom: 0; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   color: ${props => props.theme.colorText};
//   opacity: 0.8;
//   h3 {
//     margin-left: 0.6rem;
//     font-size: 2.2rem;
//     font-weight: 600;
//   }
//   a {
//     margin-left: 1rem;
//     cursor: pointer;
//   }
//   &:hover {
//     h3 {
//       font-size: 3rem;
//     }
//   }
// `;
