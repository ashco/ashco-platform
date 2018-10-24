import React from 'react';

import PortfolioItem from '../components/Portfolio/PortfolioItem';
import { PortfolioContainer } from '../components/Portfolio/PortfolioHelpers';
import { StaticQuery, graphql } from 'gatsby';

const PortfolioPage = () => (
  <StaticQuery
    query={graphql`
      query PortfolioList {
        allContentfulPortfolioProject(sort: { fields: [order], order: DESC }) {
          edges {
            node {
              id
              title
              slug
              image {
                id
                fluid(maxWidth: 600) {
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <PortfolioContainer>
        {data.allContentfulPortfolioProject.edges.map(({ node }) => (
          <PortfolioItem project={node} key={node.id} />
        ))}
      </PortfolioContainer>
    )}
  />
);

export default PortfolioPage;
