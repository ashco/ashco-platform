import React from 'react';
// import Link from 'gatsby-link';
import styled from 'styled-components';

import { Tag, TagContainer } from '../helpers';

import GithubIcon from '../Icons/Github';
import DesktopIcon from '../Icons/Desktop';

const PortfolioSelectedWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  img {
    display: block;
    border-radius: ${props => props.theme.portfolioRadius};
  }
`;

const PortfolioSelectedTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  height: 160px;
  opacity: 0.7;
  background: #000;
  width: 900px;
  border-radius: 0 0 ${props => props.theme.portfolioRadius}
    ${props => props.theme.portfolioRadius};
`;

const PortfolioSelectedLeftContainer = styled.div``;

const PortfolioSelectedRightContainer = styled.div`
  display: flex;
  margin: 20px 30px;
  a {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 0 10px;
  }
`;

const PortfolioSelected = ({ project }) => (
  <PortfolioSelectedWrapper>
    <img src={project.image.resize.src} alt={project.image.title} />
    <PortfolioSelectedTextContainer>
      <PortfolioSelectedLeftContainer>
        {project.description.description}
        <TagContainer>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </PortfolioSelectedLeftContainer>
      <PortfolioSelectedRightContainer>
        <a href={project.liveSiteLink} target="_blank">
          <DesktopIcon />
          <p>Live Site</p>
        </a>
        <a href={project.githubLink} target="_blank">
          <GithubIcon />
          <p>Github</p>
        </a>
      </PortfolioSelectedRightContainer>
    </PortfolioSelectedTextContainer>
  </PortfolioSelectedWrapper>
);

export default PortfolioSelected;
