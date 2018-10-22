import React from 'react';
import styled from 'styled-components';

import PortfolioListing from './PortfolioListing';
import { PageLink } from '../helpers';
// import { PortfolioListingContainer } from './Portfolio/PortfolioHelpers';

const PortfolioMain = ({ projects }) => (
  <section>
    {/* <h2>Projects</h2>
    <PortfolioListingContainer>
      {projects.map(project => (
        <PortfolioListing project={project.node} key={project.node.id} />
      ))}
    </PortfolioListingContainer>
    <PageLink to="/projects" text="Checkout all of my projects =>" /> */}
  </section>
);

// const PortfolioMainWrapper = styled.section`
//   border: 1px solid ${props => props.theme.colorPrimary};
// `;

const PortfolioListingContainer = styled.div`
  display: flex;
`;

export default PortfolioMain;
