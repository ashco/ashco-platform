import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../../config/media';

import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

class PortfolioItemSelected extends PureComponent {
  render() {
    const { project } = this.props;
    return (
      <PortfolioItemSelectedWrapper>
        <Img fluid={project.image.fluid} alt={project.image.title} />
        <PortfolioItemSelectedTextContainer>
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
        </PortfolioItemSelectedTextContainer>
      </PortfolioItemSelectedWrapper>
    );
  }
}

const PortfolioItemSelectedWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  .gatsby-image-wrapper {
    height: 60vw;
  }
  @media (min-width: 1000px) {
    margin-top: 0.8rem;
    width: 990px;
    height: 660px;
    .gatsby-image-wrapper {
      position: static !important;
      border-bottom: none;
      img {
        border-radius: 10px;
      }
    }
  }
  ${media.hd`
    width: 1340px;
    height: 880px;
  `};
`;

const PortfolioItemSelectedTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.9;
  padding: 0.8rem 1.6rem;
  border-top: 3px solid ${props => props.theme.colorPrimary}cc;
  border-bottom: 5px solid ${props => props.theme.colorPrimary}cc;
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
        border-bottom: 3px solid ${props => props.theme.colorPrimary}cc;
      }
    }
  }

  @media (min-width: 1000px) {
    position: absolute;
    bottom: 0;
    background: ${props => props.theme.colorBackground};
    border: 3px solid ${props => props.theme.colorPrimary}cc;
    border-radius: 0 0 10px 10px;
  }
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

export default PortfolioItemSelected;
