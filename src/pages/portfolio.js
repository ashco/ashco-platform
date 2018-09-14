import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import PortfolioListing from '../components/Portfolio/PortfolioListing';
import { PageTitle } from '../components/helpers';

const PortfolioContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 960px;
`;

const PortfolioPage = ({ data }) => (
  <div>
    <PageTitle text="Portfolio" />
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
