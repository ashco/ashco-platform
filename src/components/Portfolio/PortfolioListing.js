import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PortfolioListingWrapper = styled.article`
  background-color: #333;
  width: 440px;
`;

const PortfolioListing = ({ project }) => (
  <PortfolioListingWrapper>
    <Link to={`/portfolio/${project.slug}`}>
      <h3>{project.title}</h3>
      <img src={project.image.resize.src} alt={project.title} />
    </Link>
  </PortfolioListingWrapper>
);

export default PortfolioListing;
