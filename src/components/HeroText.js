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

export const HeroText = ({ isHome }) => {
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
      isHome={isHome}
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
  pointer-events: auto;
  display: ${({ isHome }) => !isHome && 'none'};
  user-select: none;
  padding: 1.25rem 1.25rem 1.25rem 1.5rem;
  width: 90%;
  h4 {
    font-size: 4.5vw;
    padding-bottom: 0.5rem;
    font-weight: 400;
  }
  h2 {
    font-weight: 600;
    font-size: 11vw;
  }
  ${media.tablet`
    position: fixed;
    left: 10vw;
    width: auto;
    bottom: 15vh;
    h4 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 4.5rem;
    }
  `};
  ${media.laptop`
    left: 12.5vw;
    bottom: 15vh;
    h4 {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 5.5rem;
    }
  `};
  ${media.hd`
    left: 17.5vw;
    h2 {
      font-size: 6.5rem;
    }
  `};
`;
