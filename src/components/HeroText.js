import React, { Component } from 'react';
import styled from 'styled-components';

class HeroText extends Component {
  render() {
    return (
      <HeroTextWrapper>
        <FirstText>Welcome</FirstText>
        <SecondText>To</SecondText>
        <TitleLine />
        <TitleText>AshCo.io</TitleText>
      </HeroTextWrapper>
    );
  }
}

const HeroTextWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  z-index: 5;
  top: 50vh;
  left: 8vw;
  font-weight: 600;
  p,
  h1 {
    margin-left: ${props => props.theme.mobileHeroLineWidth};
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    top: 30vh;
    left: 16vw;
    p,
    h1 {
      margin-left: ${props => props.theme.tabletHeroLineWidth};
    }
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    top: 27vh;
    left: 24vw;
  }
`;

const FirstText = styled.p`
  font-size: 1.8rem;
  line-height: 0.8;
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
  width: ${props => props.theme.mobileHeroLineWidth};
  height: 150px;
  background-color: ${props => props.theme.colorPrimary};
  @media (min-width: ${props => props.theme.widthLaptop}) {
    width: ${props => props.theme.tabletHeroLineWidth};
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
  font-size: 4rem;
  line-height: 1.2;
  color: ${props => props.theme.colorText};
  @media (min-width: ${props => props.theme.widthLaptop}) {
    font-size: 5.5rem;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    font-size: 7.5rem;
  }
`;

export default HeroText;
