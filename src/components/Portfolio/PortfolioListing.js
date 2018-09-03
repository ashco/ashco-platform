import React from 'react';
import Link from 'gatsby-link';

const PortfolioListing = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <span>{post.createdAt}</span>
  </article>
);

export default PortfolioListing;
