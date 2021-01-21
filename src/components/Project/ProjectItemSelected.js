import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media, sizes } from '../../config/media';

import { TagListSelected } from './TagList';
import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

class ProjectItemSelected extends PureComponent {
  render() {
    const { project } = this.props;

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
  }
}

const ProjectItemSelectedWrapper = styled.div`
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 1rem; */
  .gatsby-image-wrapper {
    /* height: 60vw; */
    picture > img {
      box-shadow: ${(props) => props.theme.colorPrimary}80 0px 0px 10px 3px;
    }
  }
  @media (min-width: ${sizes.laptop}px) {
    /* margin-top: 0.8rem; */
    /* width: 990px; */
    width: 100%;
    height: 660px;
    .gatsby-image-wrapper {
      position: static !important;
      border-bottom: none;
      img {
        border-radius: 10px;
      }
    }
    &:hover {
      box-shadow: ${({ theme }) => theme.colorPrimary}80 0 0 15px 5px;
      transform: scale(1.015);
    }
    }
  }
  ${media.hd`
    width: 1340px;
    height: 880px;
  `};
`;

const ProjectItemSelectedTextContainer = styled.div`
  opacity: 0.9;
  padding: 0.8rem 1.6rem;
  border-top: 5px solid ${(props) => props.theme.colorPrimary};
  border-bottom: 5px solid ${(props) => props.theme.colorPrimary};
  box-shadow: ${(props) => props.theme.colorPrimary}80 0px 0px 5px 0px;
  background-color: ${(props) => props.theme.colorBackground};
  /* .tags-row {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  } */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container-left {
    margin: 1rem 1rem 1rem 0;
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
    }
    p {
      line-height: 1.1;
    }
  }
  .container-right {
    display: flex;
    flex-direction: column;
    a {
      margin: 0.5rem;
      padding-bottom: 3px;
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
    background: ${(props) => props.theme.colorBackground};
    border: 3px solid ${(props) => props.theme.colorPrimary};
    border-radius: 0 0 10px 10px;
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
