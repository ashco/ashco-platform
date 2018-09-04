import React from 'react';
import Link from 'gatsby-link';

const PortfolioSelect = ({ project }) => (
  <article>
    <h3>
      <Link to={`portfolio/${project.slug}`}>{project.title}</Link>
    </h3>
    <span>{project.createdAt}</span>
  </article>
);

export default PortfolioSelect;
