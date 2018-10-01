import React from 'react';
import Link from 'gatsby-link';

const BlogListing = ({ post }) => (
  <article>
    <Link to={`blog/${post.slug}`}>
      <h4>{post.title}</h4>
      <span>{post.createdAt}</span>
    </Link>
  </article>
);

export default BlogListing;
