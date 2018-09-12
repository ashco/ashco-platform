import React from 'react';
import Link from 'gatsby-link';

const BlogListing = ({ post }) => (
  <article>
    <h3>
      <Link to={`blog/${post.slug}`}>{post.title}</Link>
    </h3>
    <span>{post.createdAt}</span>
  </article>
);

export default BlogListing;
