import React, { Component } from 'react';
import styled from 'styled-components';

import { HiddenContextConsumer } from './Context/HiddenContext';

class HeroImg extends Component {
  // state = {
  //   showHeroImg: true,
  // };

  // toggleHeroImg = showHeroImg => {
  //   this.setState({
  //     showHeroImg,
  //   });
  // };

  render() {
    return (
      <HiddenContextConsumer>
        {({ showHeroImg }) =>
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
      </HiddenContextConsumer>
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
  margin: 0 10vw 8.5vh 10vw;
  bottom: 0;
  left: 0;
  font-weight: 600;
  padding: 30px 35px 0px 10px;
  border-left: ${props => props.theme.desktopHeroLineWidth} solid
    ${props => props.theme.colorPrimary};
  border-bottom: ${props => props.theme.desktopHeroLineWidth} solid
    ${props => props.theme.colorPrimary};
  /* p,
  h1 {
    margin-left: ${props => props.theme.mobileHeroLineWidth};
  } */
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin-bottom: 15.5vh;
    /* p,
    h1 {
      margin-left: ${props => props.theme.tabletHeroLineWidth};
    } */
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    margin-left: 15vw;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    margin-left: 21vw;
  }
`;

const FirstText = styled.p`
  /* padding-top: 1rem; */
  font-size: 1.8rem;
  line-height: 0.6;
  color: ${props => props.theme.colorText};
  @media (min-width: ${props => props.theme.widthLaptop}) {
    font-size: 2.2rem;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    font-size: 2.5rem;
  }
`;

const SecondText = styled.p`
  font-size: 1.4rem;
  /* padding-left: 1rem; */
  line-height: 1.7;
  margin-bottom: 0.6rem;
  color: ${props => props.theme.colorText};
  @media (min-width: ${props => props.theme.widthLaptop}) {
    font-size: 1.6rem;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    font-size: 1.9rem;
  }
`;

const TitleLine = styled.div`
  height: 125px;
  @media (min-width: ${props => props.theme.widthLaptop}) {
    height: 180px;
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    height: 200px;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    height: 280px;
  }
`;

const TitleText = styled.h1`
  font-size: 3.8rem;
  line-height: 1.2;
  color: ${props => props.theme.colorText};
  @media (min-width: ${props => props.theme.widthLaptop}) {
    font-size: 5.5rem;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    font-size: 7.5rem;
  }
`;

const TitleTextPeriod = styled.span`
  color: ${props => props.theme.colorPrimary};
`;

export default HeroImg;
