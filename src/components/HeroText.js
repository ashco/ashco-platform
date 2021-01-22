import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../config/media';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.0,
];
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const HeroText = () => {
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

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <HeroTextWrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <LineLeft style={leftSpring} />
      <LineBottom style={bottomSpring} />
      <animated.h4>Full-Stack Software Engineer</animated.h4>
      <animated.h2>Ashton Christie</animated.h2>
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

const HeroTextWrapper = styled(animated.div)`
  user-select: none;
  /* position: fixed; */
  /* margin: 5%; */
  /* padding: 15px 15px 15px 20px; */
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  width: 90%;
  /* left: 0vw; */
  /* bottom: 155px; */
  /* .container {
  } */
  h4 {
    font-size: 4.2vw;
    padding-bottom: 0.5rem;
    font-weight: 400;
  }
  h2 {
    font-weight: 600;
    font-size: 11.4vw;
  }
  ${media.tablet`
    position: fixed;
    left: 10vw;
    /* bottom: 11vh; */
    width: auto;
    bottom: 15vh;
    h4 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 4.4rem;
    }
  `};
  ${media.laptop`
    left: 11vw;
    bottom: 13vh;
    h4 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 5.4rem;
    }
  `};
  ${media.desktop`
    left: 15vw;
    h2 {
      font-size: 6.4rem;
    }
  `};
  ${media.hd`
    left: 18vw;
  `};
`;
