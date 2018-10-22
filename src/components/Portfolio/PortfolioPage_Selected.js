import React, { Component } from 'react';

import PortfolioItem_Selected from './PortfolioItem_Selected';
import PortfolioItem from './PortfolioItem';
import { PortfolioContainer } from './PortfolioHelpers';
import { graphql } from 'gatsby';

class PortfolioPage_Selected extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <PortfolioContainer>
        <PortfolioItem_Selected project={data.contentfulPortfolioProject} />
        {data.allContentfulPortfolioProject.edges.map(({ node }) => (
          <PortfolioItem project={node} key={node.id} />
        ))}
      </PortfolioContainer>
    );
  }
}

export default PortfolioPage_Selected;

export const query = graphql`
  query PortfolioQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulPortfolioProject(slug: { eq: $slug }) {
      id
      title
      slug
      tags
      githubLink
      liveSiteLink
      description {
        id
        description
      }
      image {
        id
        title
        fluid(maxWidth: 1200) {
          aspectRatio
          sizes
          src
          srcSet
        }
      }
    }
    allContentfulPortfolioProject(
      sort: { fields: [createdAt], order: DESC }
      filter: { slug: { ne: $slug } }
    ) {
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
          githubLink
          liveSiteLink
        }
      }
    }
  }
`;
