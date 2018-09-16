import React from 'react';
import styled from 'styled-components';

import BlogListing from './BlogListing';
import { PageTitle, PageLink } from '../helpers';

const BlogWrapper = styled.section`
  background-color: #555;
  /* min-height: 30vh; */
`;

const BlogListingContainer = styled.div`
  color: #eee;
`;

const BlogSection = ({ posts }) => (
  <BlogWrapper>
    <PageTitle text="Blog" />
    <BlogListingContainer>
      <h3>Recent Posts</h3>
      {posts.map(post => (
        <BlogListing post={post.node} key={post.node.id} />
      ))}
    </BlogListingContainer>
    <PageLink to="/blog" text="View all blog posts =>" />
  </BlogWrapper>
);

export default BlogSection;
