import React from 'react';
import styled from 'styled-components';

import PortfolioListing from './PortfolioListing';
import { PageLink } from '../helpers';

const PortfolioWrapper = styled.section`
  background-color: #444;
  /* min-height: 45vh; */
`;

const PortfolioListingContainer = styled.div`
  display: flex;
`;

const PortfolioLinkContainer = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.5rem;
  }
`;

const PortfolioMain = ({ projects }) => (
  <PortfolioWrapper>
    <h2>Projects</h2>
    <PortfolioListingContainer>
      {projects.map(project => (
        <PortfolioListing project={project.node} key={project.node.id} />
      ))}
    </PortfolioListingContainer>
    <PageLink to="/projects" text="Checkout all of my projects =>" />
  </PortfolioWrapper>
);

export default PortfolioMain;
