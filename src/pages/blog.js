import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import BlogListing from '../components/Blog/BlogListing';
import { MainContainer } from '../components/helpers';

const BlogPage = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <BlogWrapper>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <BlogListing post={node} key={node.id} />
        ))}
      </BlogWrapper>
    )}
  />
);

const BlogWrapper = styled(MainContainer)`
  max-width: 660px;
  margin-top: 3rem;
`;

export default BlogPage;
