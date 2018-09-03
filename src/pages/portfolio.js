import React from 'react';
import Link from 'gatsby-link';
import BlogListing from '../components/Blog/BlogListing';

const PortfolioPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allContentfulPortfolioPost.edges.map(({ node }) => (
      <BlogListing post={node} key={node.id} />
    ))}
  </div>
);

export default PortfolioPage;

export const query = graphql`
  query PortfolioList {
    allContentfulPortfolioPost {
      edges {
        node {
          id
          title
          slug
          githubLink
          liveLink
        }
      }
    }
  }
`;
