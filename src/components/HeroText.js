import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../config/media';

class HeroText extends PureComponent {
  render() {
    const { isHome } = this.props;
    return (
      <HeroTextWrapper isHome={isHome}>
        <LineLeft />
        <LineBottom />
        <h4>Web Developer + Designer</h4>
        <h2>Ash Christie</h2>
      </HeroTextWrapper>
    );
  }
}

const initialDelay = 1;
const fadeInTime = 1;

const strobeDelay = 4.6;
const lineAnimateTime = 0.65;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animateLineLeft = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
`;

const animateLineBottom = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const LineLeft = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colorPrimary};
  bottom: 0;
  left: 0;
  width: 8px;
  height: 0%;
  animation: ${animateLineLeft} ease-in-out ${lineAnimateTime}s;
  animation-delay: ${initialDelay}s;
  animation-fill-mode: forwards;
`;

const LineBottom = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colorPrimary};
  bottom: 0;
  left: 0;
  height: 8px;
  width: 0%;
  animation: ${animateLineBottom} ease-in-out ${lineAnimateTime}s;
  animation-delay: ${initialDelay + lineAnimateTime - 0.2}s;
  animation-fill-mode: forwards;
`;

// // Create the keyframes
// const pulse = keyframes`
//   0%, {
//     opacity: 0
//   }
//   35%, 65% {
//     opacity: 1
//   }
//   100% {
//     opacity: 0
//   }
// `;

// const StrobeWrapper = styled.span`
//   color: ${({ theme }) => theme.colorPrimary};
//   opacity: 0;
//   animation-name: ${pulse};
//   animation-duration: 5s;
//   animation-delay: ${initialDelay + strobeDelay}s;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// `;

const HeroTextWrapper = styled.div`
  user-select: none;
  position: fixed;
  /* top: ${({ isHome }) => (isHome ? 'auto' : '240px')};
  bottom: ${({ isHome }) => (isHome ? 0 : 'auto')}; */
  /* left: 0; */
  /* margin: 0 5% 8.5vh 5%; */
  /* padding: 30px 35px 10px 20px; */
  /* max-width: 90%; */
  pointer-events: none;
  /* bottom: 10vh; */

  /* left: 8vw; */
  margin: 5%;
  padding: 15px 15px 15px 20px;
  width: 90%;
  left: 0vw;
  bottom: 5vh;
  h4 {
    font-size: 5.3vw;
    padding-bottom: 2px;
    font-weight: 400;
  }
  h2 {
    font-weight: 600;
    font-size: 14.2vw;
  }
  ${media.tablet`
    left: 8.5vw;
    bottom: 11vh;
    width: auto;
    h4 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 5.6rem;
    }
  `};
  ${media.laptop`
    left: 11vw;
    bottom: 13vh;
    h4 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 6.4rem;
    }
  `};
  ${media.desktop`
    left: 15vw;
    h2 {
      font-size: 7rem;
    }
  `};
  ${media.hd`
    left: 18vw;
    /* border-left-width: 10px;
    border-bottom-width: 10px; */
  `};

  /* @media (min-width: 350px) {
    margin-left: 10vw;
  }
   */
`;

// const FirstText = styled.p`
//   font-size: 1.6rem;
//   line-height: 0.6;
//   color: ${({ theme }) => theme.colorText};
//   /* ANIMATION */
//   visibility: 0;
//   opacity: 0;
//   animation: ${fadeInAnimation} ${fadeInTime}s linear;
//   animation-delay: ${initialDelay + 1.2}s;
//   animation-fill-mode: forwards;
//   /* END OF ANIMATION */
//   @media (min-width: 350px) {
//     font-size: 1.8rem;
//   }
//   ${media.laptop`
//     font-size: 2.2rem;
//   `};
//   ${media.hd`
//     font-size: 2.5rem;
//   `};
// `;

// const SecondText = styled.p`
//   font-size: 1.4rem;
//   line-height: 1.7;
//   margin-bottom: 0.6rem;
//   color: ${({ theme }) => theme.colorText};
//   /* ANIMATION */
//   visibility: 0;
//   opacity: 0;
//   animation: ${fadeInAnimation} ${fadeInTime}s linear;
//   animation-delay: ${initialDelay + 2}s;
//   animation-fill-mode: forwards;
//   /* END OF ANIMATION */
//   @media (min-width: 350px) {
//     font-size: 1.2rem;
//   }
//   ${media.laptop`
//     font-size: 1.6rem;
//   `};
//   ${media.hd`
//     font-size: 1.9rem;
//   `};
// `;

// const Spacer = styled.div`
//   height: 125px;
//   ${media.laptop`
//     height: 180px;
//   `}
//   ${media.desktop`
//     height: 200px;
//   `}
//   ${media.hd`
//     height: 280px;
//   `}
// `;

// const TitleText = styled.h1`
//   font-size: 3.6rem;
//   line-height: 1.2;
//   color: ${({ theme }) => theme.colorText};
//   /* ANIMATION */
//   visibility: 0;
//   opacity: 0;
//   animation: ${fadeInAnimation} ${fadeInTime}s linear;
//   animation-delay: ${initialDelay + 2.8}s;
//   animation-fill-mode: forwards;
//   /* END OF ANIMATION */
//   @media (min-width: 350px) {
//     font-size: 4.4rem;
//   }
//   ${media.laptop`
//     line-height: 1.1;
//     font-size: 5.8rem;
//   `};
//   ${media.hd`
//     font-size: 7.8rem;
//   `};
// `;

export default HeroText;