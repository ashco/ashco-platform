import React, { Component } from 'react';

import PortfolioItemSelected from './PortfolioItemSelected';
import PortfolioItem from './PortfolioItem';
import { PortfolioContainer } from './PortfolioHelpers';
import { graphql } from 'gatsby';

class PortfolioPageSelected extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <PortfolioContainer>
        <PortfolioItemSelected project={data.contentfulPortfolioProject} />
        {data.allContentfulPortfolioProject.edges.map(({ node }) => (
          <PortfolioItem project={node} key={node.id} />
        ))}
      </PortfolioContainer>
    );
  }
}

export default PortfolioPageSelected;

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
      sort: { fields: [order], order: DESC }
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
