import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BlogListingWrapper = styled.article`
  margin: 1rem 0;
`;

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <h3>
      <Link to={`blog/${post.slug}`}>{post.title}</Link>
    </h3>
    <span>{post.createdAt}</span>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </BlogListingWrapper>
);

export default BlogListing;
