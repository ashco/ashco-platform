import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { LinkIcon } from '../helpers';

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

const ProfileSelectTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  height: 160px;
  opacity: 0.7;
  background: #000;
  width: 900px;
`;

const PortfolioSelectLinkContainer = styled.div`
  display: flex;
`;

const PortfolioSelect = ({ project }) => (
  <PortfolioSelectWrapper>
    <img src={project.image.resize.src} alt={project.image.title} />
    <ProfileSelectTextContainer>
      <p>{project.description.description}</p>
      <PortfolioSelectLinkContainer>
        <a href={project.githubLink} target="_blank">
          <LinkIcon src={githubIcon} alt="Project Github link" size="60px" />
        </a>
        <a href={project.liveSiteLink} target="_blank">
          <LinkIcon src={desktopIcon} alt="Project live link" size="60px" />
        </a>
      </PortfolioSelectLinkContainer>
    </ProfileSelectTextContainer>
  </PortfolioSelectWrapper>
);

export default PortfolioSelect;
