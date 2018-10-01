import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { LinkIcon, Tag, TagContainer } from '../helpers';

import githubIcon from '../../images/icons/github-brands.svg';
import desktopIcon from '../../images/icons/desktop-solid.svg';

const PortfolioSelectWrapper = styled.div`
  background-color: #333;
  width: 440px;
  position: relative;
  img {
    display: block;
  }
`;

const PortfolioSelectTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  height: 160px;
  opacity: 0.7;
  background: #000;
  width: 900px;
`;

const PortfolioSelectLeftContainer = styled.div``;

const PortfolioSelectRightContainer = styled.div`
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

const PortfolioSelect = ({ project }) => (
  <PortfolioSelectWrapper>
    <img src={project.image.resize.src} alt={project.image.title} />
    <PortfolioSelectTextContainer>
      <PortfolioSelectLeftContainer>
        {project.description.description}
        <TagContainer>
          {project.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </TagContainer>
      </PortfolioSelectLeftContainer>
      <PortfolioSelectRightContainer>
        <a href={project.liveSiteLink} target="_blank">
          <LinkIcon src={desktopIcon} alt="Project live link" size="60px" />
          <p>Live Site</p>
        </a>
        <a href={project.githubLink} target="_blank">
          <LinkIcon src={githubIcon} alt="Project Github link" size="60px" />
          <p>Github</p>
        </a>
      </PortfolioSelectRightContainer>
    </PortfolioSelectTextContainer>
  </PortfolioSelectWrapper>
);

export default PortfolioSelect;
