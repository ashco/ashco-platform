import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
// import { Tag, TagContainer } from '../helpers';

import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

const PortfolioItem_Selected = ({ project }) => (
  <PortfolioItem_SelectedWrapper>
    <Img fluid={project.image.fluid} alt={project.image.title} />
    <PortfolioItem_SelectedTextContainer>
      <div className="container-left">
        <h3>{project.title}</h3>
        <p>{project.description.description}</p>
        {/* <TagContainer>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer> */}
      </div>
      <div className="container-right">
        <a
          href={project.liveSiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DesktopIcon />
          {/* <p>Live Site</p> */}
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          {/* <p>Github</p> */}
        </a>
      </div>
    </PortfolioItem_SelectedTextContainer>
  </PortfolioItem_SelectedWrapper>
);

const PortfolioItem_SelectedWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 600px; */
  border-top: 5px solid ${props => props.theme.colorPrimary}90;
  border-bottom: 5px solid ${props => props.theme.colorPrimary}90;
  /* box-shadow: ${props => props.theme.colorPrimary}40 0px 8px 20px;
  background: transparent;
  transform: translateY(-3px); */
  .gatsby-image-wrapper {
    /* width: 90vw; */
    border-bottom: 2px solid ${props => props.theme.colorPrimary}90;
    height: 60vw;
    /* max-width: 600px; */
    max-height: 400px;
    /* border-radius: ${props => props.theme.portfolioRadius} */
      /* ${props => props.theme.portfolioRadius} 0 0; */
  }
`;

const PortfolioItem_SelectedTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  /* padding: 1.5rem; */
  /* width: 90%; */
  margin: 1rem 2rem;
  /* border-top: none; */
  /* border-radius: 0 0 ${props => props.theme.portfolioRadius}
    ${props => props.theme.portfolioRadius}; */
  .container-left {
    margin-right: 1rem;
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
    }

  }
  .container-right {
    display: flex;
    /* margin: 20px 30px; */
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;
    }
  }
`;

export default PortfolioItem_Selected;
