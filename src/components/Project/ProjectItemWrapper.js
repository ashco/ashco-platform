import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 300,
  (x - window.innerWidth / 2) / 300,
  1.025,
];
const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const ProjectItemWrapper = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <StyledProjectItemWrapper selected={selected}>
        {children}
      </StyledProjectItemWrapper>
    </animated.div>
  );
};

const StyledProjectItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorBackground};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  width: 100%;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 7px 1px;
`;
