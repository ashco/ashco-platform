import React from 'react';

import PortfolioItem from '../components/Portfolio/PortfolioItem';
// import PortfolioListingContainer from '../components/Portfolio/PortfolioListingContainer';
import { PortfolioContainer } from '../components/Portfolio/PortfolioHelpers';
// import { DefaultContainer } from '../components/helpers';
import { StaticQuery, graphql } from 'gatsby';

const PortfolioPage = () => (
  <StaticQuery
    query={graphql`
      query PortfolioList {
        allContentfulPortfolioProject(
          sort: { fields: [createdAt], order: DESC }
        ) {
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
    `}
    render={data => (
      // <DefaultContainer>
      <PortfolioContainer>
        {data.allContentfulPortfolioProject.edges.map(({ node }) => (
          <PortfolioItem project={node} key={node.id} />
        ))}
      </PortfolioContainer>
      // </DefaultContainer>
    )}
  />
);

export default PortfolioPage;
