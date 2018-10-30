import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../config/media';

import FadeWrapper from './Animation/Fade';

class HeroImg extends PureComponent {
  render() {
    const { showHeroImg, isHome } = this.props;
    return (
      // <VisualContextConsumer>
      //   {({ showHeroImg, isHome }) => {
      //     return (
      <FadeWrapper noFade={isHome} visible={showHeroImg}>
        <HeroTextWrapper isHome={isHome}>
          <FirstText>Welcome</FirstText>
          <SecondText>To</SecondText>
          <TitleLine />
          <TitleText>
            AshCo
            <StrobeWrapper>.</StrobeWrapper>
            io
          </TitleText>
        </HeroTextWrapper>
      </FadeWrapper>
      //     );
      //   }}
      // </VisualContextConsumer>
    );
  }
}

// Create the keyframes
const pulse = keyframes`
  0%, 35% {
    opacity: 1
  }
  50% {
    opacity: 0
  }
  65%, 100% {
    opacity: 1
  }
`;

const StrobeWrapper = styled.span`
  color: ${({ theme }) => theme.colorPrimary};
  animation-name: ${pulse};
  animation-duration: 5s;
  animation-delay: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const HeroTextWrapper = styled.div`
  user-select: none;
  position: fixed;
  z-index: -5;
  bottom: ${({ isHome }) => (isHome ? 0 : 'auto')};
  top: ${({ isHome }) => (isHome ? 'auto' : '240px')};
  left: 0;
  font-weight: 600;
  margin: 0 10vw 8.5vh 10vw;
  padding: 30px 35px 0px 10px;
  border-left: 8px solid;
  border-bottom: 8px solid;
  border-color: ${({ theme }) => theme.colorPrimary};
  transition: 0.1s all ease-in-out;
  transform: scale(1);
  &:hover {
    transition: 0.15s all ease-in-out;
    transform: scale(1.0375);
  }

  > * {
    pointer-events: none;
  }
  ${media.tablet`
    margin-left: 11.5vw;
    margin-bottom: 16vh;
  `};
  ${media.desktop`
    margin-left: 15.5vw;
  `};
  ${media.hd`
    margin-left: 21vw;
  `};
`;

const FirstText = styled.p`
  font-size: 1.8rem;
  line-height: 0.6;
  color: ${({ theme }) => theme.colorText};
  ${media.laptop`
    font-size: 2.2rem;
  `};
  ${media.hd`
    font-size: 2.5rem;
  `};
`;

const SecondText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colorText};
  ${media.laptop`
    font-size: 1.6rem;
  `};
  ${media.hd`
    font-size: 1.9rem;
  `};
`;

const TitleLine = styled.div`
  height: 125px;
  ${media.laptop`
    height: 180px;
  `}
  ${media.desktop`
    height: 200px;
  `}
  ${media.hd`
    height: 280px;
  `}
`;

const TitleText = styled.h1`
  font-size: 3.8rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colorText};
  ${media.laptop`
    line-height: 1.1;
    font-size: 5.5rem;
  `};
  ${media.hd`
    font-size: 7.5rem;
  `};
`;

export default HeroImg;
