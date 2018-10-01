import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BlogListingWrapper = styled.article`
  margin: 1rem 0;
`;

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <Link to={`blog/${post.slug}`}>
      <h3>{post.title}</h3>
      <span>{post.createdAt}</span>
      <p>{post.body.childMarkdownRemark.excerpt}</p>
    </Link>
  </BlogListingWrapper>
);

export default BlogListing;
