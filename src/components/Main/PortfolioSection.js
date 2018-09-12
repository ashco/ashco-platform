import React from 'react';
import styled from 'styled-components';
import PortfolioListing from './PortfolioListing';

const PortfolioWrapper = styled.section`
  background-color: #444;
  min-height: 45vh;
`;

const PortfolioListingContainer = styled.div`
  display: flex;
`;

const PortfolioMain = ({ projects }) => (
  <PortfolioWrapper>
    <h2>Portfolio</h2>
    <PortfolioListingContainer>
      {projects.map(project => (
        <PortfolioListing project={project.node} key={project.node.id} />
      ))}
    </PortfolioListingContainer>
  </PortfolioWrapper>
);

export default PortfolioMain;
