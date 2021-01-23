import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';

import { TagListSelected } from './TagList';
import { media, sizes } from '../../config/media';
import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 500,
//   (x - window.innerWidth / 2) / 500,
//   1.025,
// ];
// const trans = (x, y, s) =>
//   `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectItemSelected = ({ project }) => {
  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 350, friction: 40 },
  // }));

  return (
    <ProjectItemSelectedWrapper
    // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    // onMouseLeave={() => set({ xys: [0, 0, 1] })}
    // style={{ transform: props.xys.interpolate(trans) }}
    >
      <a
        href={project.liveSiteLink}
        title="Live Link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={project.image.fluid} alt={project.image.title} />
      </a>
      <ProjectItemSelectedTextContainer>
        <TagListSelected tags={project.tags} />
        {/* <ul className="tags-row">
            {project.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </ul> */}
        <div className="container">
          <div className="container-left">
            <h3>{project.title}</h3>
            <p>{project.description.description}</p>
          </div>
          <div className="container-right">
            {project.liveSiteLink && (
              <a
                href={project.liveSiteLink}
                title="Live Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DesktopIcon />
              </a>
            )}
            <a
              href={project.githubLink}
              title="Github Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </ProjectItemSelectedTextContainer>
    </ProjectItemSelectedWrapper>
  );
};
// }

const ProjectItemSelectedWrapper = styled.div`
  overflow: auto;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: ${(props) => props.theme.colorPrimary}80 0px 0px 7px 1px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  /* border-top: 3px solid ${(props) => props.theme.colorPrimary}; */
  border-bottom: 3px solid ${(props) => props.theme.colorPrimary};
  /* margin-bottom: 1rem; */
  .gatsby-image-wrapper {
    /* height: 60vw; */
    picture > img {
      /* box-shadow: ${(props) =>
        props.theme.colorPrimary}80 0px 0px 10px 3px; */
    }
  }
  @media (min-width: ${sizes.laptop}px) {
    /* margin-top: 0.8rem; */
    /* width: 990px; */
    border: 3px solid ${(props) => props.theme.colorPrimary};
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 15px 5px;
    width: 100%;
    height: 660px;

    .gatsby-image-wrapper {
      position: static !important;
      border-bottom: none;
      /* border-radius: 25px; */
      img {
        /* border-radius: 2px; */
        /* border-radius: 10px; */
      }
    }
    /* &:hover {
      box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 20px 8px;
      transform: scale(1.015);
    } */
  }
  ${media.hd`
    width: 1340px;
    height: 880px;
  `};
`;

const ProjectItemSelectedTextContainer = styled.div`
  opacity: 0.9;
  padding: 1.5rem 2rem;
  border-top: 3px solid ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.colorBackground};
  display: grid;
  gap: 0.5rem;

  .container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .container-left {
    display: grid;
    gap: 0.75rem;
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
    }
    p {
      line-height: 1.1;
      margin-bottom: 0;
    }
  }
  .container-right {
    display: grid;
    gap: 1rem;
    a {
      /* margin: 0.5rem; */
      /* padding-bottom: 3px; */
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.2s ease-out;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.colorPrimary};
      }
    }
  }

  ${media.laptop`
    position: absolute;
    bottom: 0;
    /* background: ${(props) => props.theme.colorBackground}; */
    /* border: 3px solid ${(props) => props.theme.colorPrimary}; */
    /* border-radius: 0 0 10px 10px; */
  `}
  ${media.desktop`
    .container-left {
      h3 {
        font-size: 2.4rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  `};
  ${media.hd`
    .container-left {
      h3 {
        font-size: 2.7rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  `};
`;

export default ProjectItemSelected;
