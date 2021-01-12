import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../config/media';
import { useSpring, animated } from 'react-spring';

const HeroText = ({ isHome }) => {
  const [animateBottom, setAnimateBottom] = useState(false);

  const initialDelay = 1000;

  const leftSpring = useSpring({
    height: '100%',
    from: { height: '0%' },
    delay: initialDelay,
    onRest: () => setAnimateBottom(true),
  });
  const bottomSpring = useSpring({
    width: animateBottom ? '100%' : '0%',
    from: { width: '0%' },
  });

  return (
    <HeroTextWrapper isHome={isHome}>
      <LineLeft style={leftSpring} />
      <LineBottom style={bottomSpring} />
      <animated.h4>Full-Stack Software Engineer</animated.h4>
      <animated.h2>Ash Christie</animated.h2>
    </HeroTextWrapper>
  );
};

const LineLeft = styled(animated.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.colorPrimary};
  bottom: 0;
  left: 0;
  width: 8px;
`;

const LineBottom = styled(animated.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.colorPrimary};
  bottom: 0;
  left: 0;
  height: 8px;
`;

const HeroTextWrapper = styled.div`
  user-select: none;
  position: fixed;
  pointer-events: none;
  margin: 5%;
  padding: 15px 15px 15px 20px;
  width: 90%;
  left: 0vw;
  bottom: 7vh;
  h4 {
    font-size: 5.3vw;
    padding-bottom: 0.5rem;
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
  `};
`;

export default HeroText;
