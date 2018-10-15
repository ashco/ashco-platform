import React, { Component } from 'react';
import styled from 'styled-components';

class HeroText extends Component {
  render() {
    return (
      <HeroTextWrapper>
        <FirstText>Welcome</FirstText>
        <SecondText>To</SecondText>
        <TitleLine />
        <TitleText>
          AshCo
          <TitleTextPeriod>.</TitleTextPeriod>
          io
        </TitleText>
      </HeroTextWrapper>
    );
  }
}

const HeroTextWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: 5;
  margin: 0 10vw 8.5vh 10vw;
  bottom: 0;
  left: 0;
  font-weight: 600;
  padding: 30px 35px 0px 10px
  border-left: ${props => props.theme.desktopHeroLineWidth} solid ${props =>
  props.theme.colorPrimary};
  border-bottom: ${props => props.theme.desktopHeroLineWidth} solid ${props =>
  props.theme.colorPrimary};
  p,
  h1 {
    margin-left: ${props => props.theme.mobileHeroLineWidth};
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin-bottom: 15.5vh;
    p,
    h1 {
      margin-left: ${props => props.theme.tabletHeroLineWidth};
    }
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    margin-left: 15vw;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    margin-left: 21vw;
  }


`;

const FirstText = styled.p`
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
  /* width: ${props => props.theme.mobileHeroLineWidth}; */
  height: 125px;
  /* background-color: ${props => props.theme.colorPrimary}; */
  @media (min-width: ${props => props.theme.widthLaptop}) {
    /* width: ${props => props.theme.tabletHeroLineWidth}; */
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

export default HeroText;
