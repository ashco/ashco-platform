import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../config/media';

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
        <h2>Musings on life, tech, and the things in between.</h2>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <BlogListing post={node} key={node.id} />
        ))}
      </BlogWrapper>
    )}
  />
);

const BlogWrapper = styled(DefaultContainer)`
  max-width: 700px;
  width: 100%;
  h2 {
    margin-bottom: 1rem;
    font-size: 1.7rem;
    line-height: 1em;
    font-weight: 600;
    margin: 0 0.75rem 1rem 0.75rem;
  }
  ${media.tablet`
    h2 {
      font-size: 1.9rem;
    }
  `};
  ${media.desktop`
    max-width: 760px;
    h2 {
      font-size: 2.1rem;
    }
  `};
  ${media.hd`
    max-width: 820px;
    h2 {
      font-size: 2.3rem;
    }
  `};
`;

export default BlogPage;
