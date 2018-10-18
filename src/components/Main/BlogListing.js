import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <Link to={`blog/${post.slug}`}>
      <h4>{post.title}</h4>
      <span> - {post.createdAt}</span>
    </Link>
  </BlogListingWrapper>
);

const BlogListingWrapper = styled.article`
  a {
    color: ${props => props.theme.colorText};
    h4 {
      display: inline-block;
    }
  }
`;

export default BlogListing;
