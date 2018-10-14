import React from 'react';
import styled from 'styled-components';

import BlogListing from './BlogListing';
import { PageLink } from '../helpers';

const BlogSection = ({ posts }) => (
  <BlogWrapper>
    <h2>Blog</h2>
    <div>
      <h3>Most Recent Posts</h3>
      {posts.map(post => (
        <BlogListing post={post.node} key={post.node.id} />
      ))}
    </div>
    <PageLink to="/blog" text="View all blog posts =>" />
  </BlogWrapper>
);

const BlogWrapper = styled.section`
  /* border: 1px solid ${props => props.theme.colorPrimary}; */
`;

export default BlogSection;
