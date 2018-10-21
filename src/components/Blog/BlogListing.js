import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <Link to={`blog/${post.slug}`}>
      <h3>{post.title}</h3>
      <span>{post.createdAt}</span>
      <p>{post.body.childMarkdownRemark.excerpt}</p>
    </Link>
  </BlogListingWrapper>
);

const BlogListingWrapper = styled.article`
  /* margin: 0.8rem 0 0 0; */
  a {
    color: ${props => props.theme.colorText};
    h3 {
      color: ${props => props.theme.colorPrimary};
    }
  }
`;

export default BlogListing;
