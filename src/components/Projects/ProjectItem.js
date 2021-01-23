import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

import { media } from '../../config/media';
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 300,
  (x - window.innerWidth / 2) / 300,
  1.025,
];
const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const ProjectItem = ({ project, selected }) => {
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
      <ProjectItemWrapper selected={selected}>
        <Link to={`/projects/${project.slug}/`}>
          <div className="overlay">
            <h3>{project.title}</h3>
          </div>
          <Img fluid={project.image.fluid} alt={project.title} />
        </Link>
      </ProjectItemWrapper>
    </animated.div>
  );
};

const ProjectItemWrapper = styled.article`
  background-color: ${({ theme }) => theme.colorBackground};
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  border-radius: 25px;
  box-shadow: none;
  border-bottom: none;
  overflow: hidden;
  /* transform: scale(1); */
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 7px 1px;
  a {
    width: 100%;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      color: ${({ theme }) => theme.colorText};
      margin-left: 0.6rem;
      font-size: 2.5rem;
      font-weight: 600;
      /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */
    }
  }

  .gatsby-image-wrapper {
    opacity: 0.5;
    /* border-radius: 5px; */
    /* width: 90vw; */
    height: 60vw;
    max-height: 400px;
    /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 15px 5px;
    /* transform: scale(1.015); */
    /* .overlay h3 {
      font-size: 2.5rem;
    } */
    /* .gatsby-image-wrapper {
      transform: scale(1.03);
    } */
  }
  ${media.desktop`
    .overlay h3 {
      font-size: 3rem;
    }
    /* &:hover {
    }
    .gatsby-image-wrapper {
      width: 100%;
    } */
  `};
  ${media.hd`
    max-width: 1400px;
  `};
`;
