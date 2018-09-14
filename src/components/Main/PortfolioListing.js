import React from 'react';
import Link from 'gatsby-link';

const PortfolioListing = ({ project }) => (
  <article>
    <Link to={`portfolio/${project.slug}`}>
      <h3>{project.title}</h3>
      <img src={project.image.resize.src} />
    </Link>
  </article>
);

export default PortfolioListing;
