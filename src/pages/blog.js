import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../config/config';

import BlogListing from '../components/Blog/BlogListing';
import { DefaultContainer } from '../components/helpers';

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
        <h2>Cashto's Soapbox</h2>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <BlogListing post={node} key={node.id} />
        ))}
      </BlogWrapper>
    )}
  />
);

const BlogWrapper = styled(DefaultContainer)`
  max-width: 660px;
  width: 100%;
  h2 {
    margin-bottom: 1rem;
    margin-left: 0.75rem;
    font-size: 2.1rem;
    line-height: 1em;
    font-weight: 600;
  }
  ${media.desktop`
    max-width: 760px;
    h2 {
      font-size: 2.4rem;
    }
  `};
  ${media.desktop`
    max-width: 900px;
    h2 {
      font-size: 2.6rem;
    }
  `};
`;

export default BlogPage;
