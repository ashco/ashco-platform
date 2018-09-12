import React from 'react';
import styled from 'styled-components';

import BlogListing from './BlogListing';

const BlogWrapper = styled.section`
  background-color: #555;
  min-height: 30vh;
`;

const BlogListingContainer = styled.div`
  color: red;
`;

const BlogSection = ({ posts }) => (
  <BlogWrapper>
    {console.log(posts)}
    <h2>Blog</h2>
    <BlogListingContainer>
      {posts.map(post => (
        <BlogListing post={post.node} key={post.node.id} />
      ))}
    </BlogListingContainer>
  </BlogWrapper>
);

export default BlogSection;
