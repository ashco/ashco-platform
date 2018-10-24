import React from 'react';
import { Link } from 'gatsby';

import {
  PortfolioContainer,
  // PortfolioItemHoverArea,
} from '../Portfolio/PortfolioHelpers';

const PortfolioListing = ({ project }) => (
  <PortfolioContainer>
    {/* <Link to={`projects/${project.slug}`}>
      <img src={project.image.resize.src} alt={project.title} />
      <PortfolioHoverArea>
        <h3>{project.title}</h3>
      </PortfolioHoverArea>
    </Link> */}
  </PortfolioContainer>
);

export default PortfolioListing;
