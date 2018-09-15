import React, { Component } from 'react';
import styled from 'styled-components';

import PortfolioSelect from './PortfolioSelect';
import PortfolioListing from './PortfolioListing';
import { PageTitle } from '../helpers';

const PortfolioContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 960px;
`;

export class PortfolioPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <PageTitle text={data.contentfulPortfolioProject.title} />
        <PortfolioSelect project={data.contentfulPortfolioProject} />
        <PortfolioContent>
          {data.allContentfulPortfolioProject.edges.map(({ node }) => (
            <PortfolioListing project={node} key={node.id} />
          ))}
        </PortfolioContent>
      </div>
    );
  }
}

export default PortfolioPage;

export const query = graphql`
  query PortfolioQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulPortfolioProject(slug: { eq: $slug }) {
      id
      title
      slug
      githubLink
      liveSiteLink
      image {
        id
        title
        resize(width: 900) {
          src
        }
      }
    }
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
