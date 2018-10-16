import React from 'react';
import { Link } from 'gatsby';

import {
  PortfolioListingWrapper,
  PortfolioHoverArea,
} from '../Portfolio/PortfolioHelpers';

const PortfolioListing = ({ project }) => (
  <PortfolioListingWrapper>
    <Link to={`projects/${project.slug}`}>
      <img src={project.image.resize.src} alt={project.title} />
      <PortfolioHoverArea>
        <h3>{project.title}</h3>
      </PortfolioHoverArea>
    </Link>
  </PortfolioListingWrapper>
);

export default PortfolioListing;
