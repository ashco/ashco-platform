import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../config/media';

import { VisualContextConsumer } from './Context/VisualContext';

class HeroImg extends Component {
  render() {
    return (
      <VisualContextConsumer>
        {({ showHeroImg, isHome }) =>
          isHome &&
          showHeroImg && (
            <HeroTextWrapper>
              {/* <AnimationLine /> */}
              <FirstText>Welcome</FirstText>
              <SecondText>To</SecondText>
              <TitleLine />
              <TitleText>
                AshCo
                <TitleTextPeriod>.</TitleTextPeriod>
                io
              </TitleText>
            </HeroTextWrapper>
          )
        }
      </VisualContextConsumer>
    );
  }
}

// // keyframes returns a unique name based on a hash of the contents of the keyframes
// const drawLine = keyframes`
//   from {
//     height: 0px;
//   }
//   to {
//     height: 400px;
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const AnimationLine = styled.div`
//   position: relative;
//   display: inline-block;
//   animation: ${drawLine} 2s linear infinite;
//   width: 8px;
//   padding: 0;
//   background-color: ${props => props.theme.colorPrimary};
// `;

const HeroTextWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: -5;
  bottom: 0;
  left: 0;
  font-weight: 600;
  margin: 0 10vw 8.5vh 10vw;
  padding: 30px 35px 0px 10px;
  border-left: 8px solid ${props => props.theme.colorPrimary};
  border-bottom: 8px solid ${props => props.theme.colorPrimary};
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
  color: ${props => props.theme.colorText};
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
  color: ${props => props.theme.colorText};
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
  color: ${props => props.theme.colorText};
  ${media.laptop`
    line-height: 1.1;
    font-size: 5.5rem;
  `} ${media.hd`
    font-size: 7.5rem;
  `};
`;

const TitleTextPeriod = styled.span`
  color: ${props => props.theme.colorPrimary};
`;

export default HeroImg;