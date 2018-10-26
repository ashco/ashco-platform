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
        <h2>The Soapbox</h2>
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
  /* margin: 1.8rem auto; */
  h2 {
    margin-bottom: 1rem;
    /* margin-left: 0.75rem; */
    font-size: 2.2rem;
    line-height: 1em;
    font-weight: 600;
  }
  ${media.tablet`
    /* margin: 3rem auto; */
  `};
  ${media.desktop`
    max-width: 760px;
    h2 {
      font-size: 2.5rem;
    }
  `};
  ${media.hd`
    max-width: 820px;
    h2 {
      font-size: 2.7rem;
    }
  `};
`;

export default BlogPage;
