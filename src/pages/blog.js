import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import BlogListing from '../components/Blog/BlogListing';
import { SectionContainer, ContentWrapper } from '../components/helpers';

const BlogPage = ({ data }) => (
  <SectionContainer>
    <ContentWrapper width="900px">
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <BlogListing post={node} key={node.id} />
      ))}
    </ContentWrapper>
  </SectionContainer>
);

export default BlogPage;

export const query = graphql`
  query BlogList {
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
