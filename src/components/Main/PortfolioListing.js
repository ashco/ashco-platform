import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

import { PortfolioListingWrapper, PortfolioHoverArea } from '../helpers';

// const PortfolioListingWrapper = styled.article`
//   position: relative;
//   img {
//     display: block;
//     transition: 0.5s ease;
//   }
//   &:hover {
//     img {
//       opacity: 0.3;
//     }
//   }
//   &:hover {
//     div {
//       opacity: 1;
//     }
//   }
// `;

const PortfolioListing = ({ project }) => (
  <PortfolioListingWrapper>
    <Link to={`portfolio/${project.slug}`}>
      <img src={project.image.resize.src} />
      <PortfolioHoverArea>
        <h3>{project.title}</h3>
      </PortfolioHoverArea>
    </Link>
  </PortfolioListingWrapper>
);

export default PortfolioListing;
