import React, { Component } from 'react';
import styled from 'styled-components';

class TitleText extends Component {
  render() {
    return (
      <TitleTextWrapper>
        <FirstText>Welcome</FirstText>
        <SecondText>To</SecondText>
        <TitleLine />
        <HeroText>AshCo.io</HeroText>
      </TitleTextWrapper>
    );
  }
}

const TitleTextWrapper = styled.div`
  position: absolute;
  top: 30vh;
  left: 20vw;
  font-weight: 600;
`;

const FirstText = styled.p`
  font-size: 2.5rem;
  line-height: 1.3;
  color: ${props => props.theme.colorText};
`;

const SecondText = styled.p`
  font-size: 2rem;
  line-height: 1.3;
  color: ${props => props.theme.colorText};
`;

const TitleLine = styled.div`
  width: 6px;
  height: 180px;
  background-color: ${props => props.theme.colorPrimary};
`;

const HeroText = styled.h1`
  font-size: 7.5rem;
  line-height: 1.3;
  color: ${props => props.theme.colorText};
`;

export default TitleText;
