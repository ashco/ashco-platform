import React from 'react';
import styled from 'styled-components';

import BlogListing from './BlogListing';
import { PageTitle, PageLink } from '../helpers';

const BlogWrapper = styled.section`
  /* background-color: #555; */
  border: 1px solid ${props => props.theme.colorPrimary};
  /* min-height: 30vh; */
`;

// const BlogListingContainer = styled.div`
//   color: red;
// `;

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

export default BlogSection;
