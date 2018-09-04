import React from 'react';
import Link from 'gatsby-link';
import PortfolioListing from '../components/Portfolio/PortfolioListing';

const PortfolioPage = ({ data }) => (
  <div>
    <h2>Portfolio</h2>
    {data.allContentfulPortfolioProject.edges.map(({ node }) => (
      <PortfolioListing project={node} key={node.id} />
    ))}
  </div>
);

export default PortfolioPage;

export const query = graphql`
  query PortfolioList {
    allContentfulPortfolioProject {
      edges {
        node {
          id
          title
          slug
          image {
            id
            resize(width: 400, height: 240, resizingBehavior: SCALE) {
              src
              width
              height
            }
          }
          githubLink
          liveSiteLink
        }
      }
    }
  }
`;
