import React from 'react';
import Link from 'gatsby-link';

import BlogListing from '../components/Blog/BlogListing';
import { ContentWrapper, PageTitle } from '../components/helpers';

const BlogPage = ({ data }) => (
  <ContentWrapper>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <BlogListing post={node} key={node.id} />
    ))}
  </ContentWrapper>
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
