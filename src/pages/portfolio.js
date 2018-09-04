import React from 'react';
import Link from 'gatsby-link';
import PortfolioListing from '../components/Portfolio/PortfolioListing';

const PortfolioPage = ({ data }) => (
  <div>
    <h2>Portfolio</h2>
    {data.allContentfulPortfolioPost.edges.map(({ node }) => (
      <PortfolioListing post={node} key={node.id} />
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
