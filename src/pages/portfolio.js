import React from 'react';
import Link from 'gatsby-link';
import PortfolioListing from '../components/Portfolio/PortfolioListing';

const PortfolioPage = ({ data }) => (
  <div>
    <h2>Portfolio</h2>
    {data.allContentfulPortfolioPost.edges.map(({ node }) => (
      <PortfolioListing project={node} key={node.id} />
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
          mainImage {
            id
          }
          githubLink
          liveLink
        }
      }
    }
  }
`;
