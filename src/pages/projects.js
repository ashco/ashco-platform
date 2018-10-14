import React from 'react';

import PortfolioListing from '../components/Portfolio/PortfolioListing';
import PortfolioListingContainer from '../components/Portfolio/PortfolioListingContainer';
import { MainContainer } from '../components/helpers';

const PortfolioPage = ({ data }) => (
  <MainContainer>
    <PortfolioListingContainer>
      {data.allContentfulPortfolioProject.edges.map(({ node }) => (
        <PortfolioListing project={node} key={node.id} />
      ))}
    </PortfolioListingContainer>
  </MainContainer>
);

export default PortfolioPage;

export const query = graphql`
  query PortfolioList {
    allContentfulPortfolioProject(sort: { fields: [createdAt], order: DESC }) {
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
