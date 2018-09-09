import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import PortfolioListing from '../components/Portfolio/PortfolioListing';

const PortfolioContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 960px;
`;

const PortfolioPage = ({ data }) => (
  <div>
    <h2>Portfolio</h2>
    <PortfolioContent>
      {data.allContentfulPortfolioProject.edges.map(({ node }) => (
        <PortfolioListing project={node} key={node.id} />
      ))}
    </PortfolioContent>
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
