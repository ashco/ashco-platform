import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PortfolioListingWrapper = styled.article`
  background-color: red;
  width: 440px;
`;

const PortfolioListing = ({ project }) => (
  <PortfolioListingWrapper>
    <h3>
      <Link to={`portfolio/${project.slug}`}>{project.title}</Link>
      <img src={project.image.resize.src} alt={project.title} />
    </h3>
    <span>{project.createdAt}</span>
  </PortfolioListingWrapper>
);

export default PortfolioListing;
