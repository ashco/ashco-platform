import React from 'react';
import Link from 'gatsby-link';

const PortfolioListingSmall = ({ project }) => (
  <article>
    {console.log('hi')}
    <h3>
      <Link to={`portfolio/${project.slug}`}>{project.title}</Link>
    </h3>
    <img src={project.image.resize.src} />
    <span>{project.createdAt}</span>
  </article>
);

export default PortfolioListingSmall;
