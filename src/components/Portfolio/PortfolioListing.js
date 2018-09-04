import React from 'react';
import Link from 'gatsby-link';

const PortfolioListing = ({ project }) => (
  <article>
    <h3>
      <Link to={`portfolio/${project.slug}`}>{project.title}</Link>
      <img src={project.image.resize.src} alt={project.title} />
    </h3>
    <span>{project.createdAt}</span>
  </article>
);

export default PortfolioListing;
