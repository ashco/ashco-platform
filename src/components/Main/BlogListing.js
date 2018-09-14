import React from 'react';
import Link from 'gatsby-link';

const BlogListing = ({ post }) => (
  <article>
    <h4>
      <Link to={`blog/${post.slug}`}>{post.title}</Link>
    </h4>
    <span>{post.createdAt}</span>
  </article>
);

export default BlogListing;
