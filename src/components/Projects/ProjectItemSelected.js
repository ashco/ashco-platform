import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { TagListSelected } from './TagList';
import { media, sizes } from '../../config/media';
import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

const ProjectItemSelected = ({ project }) => {
  return (
    <ProjectItemSelectedWrapper>
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
  border-bottom: 3px solid ${(props) => props.theme.colorPrimary};
  @media (min-width: ${sizes.laptop}px) {
    border: 3px solid ${(props) => props.theme.colorPrimary};
    border-radius: 25px;
    box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 15px 5px;
    width: 100%;
    height: 660px;

    .gatsby-image-wrapper {
      position: static !important;
      border-bottom: none;
    }
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
      font-size: 2.5rem;
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
  }
  `}
  ${media.desktop`
    .container-left {
      h3 {
        font-size: 3rem;
      }
      p {
        font-size: 1.25rem;
      }
  `};
`;

export default ProjectItemSelected;
