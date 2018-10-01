import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const BlogListingWrapper = styled.article`
  h4 {
    display: inline-block;
  }
`;

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <Link to={`blog/${post.slug}`}>
      <h4>{post.title}</h4>
      <span> - {post.createdAt}</span>
    </Link>
  </BlogListingWrapper>
);

export default BlogListing;
