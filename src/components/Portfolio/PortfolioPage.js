import React, { Component } from 'react';

import PortfolioSelected from './PortfolioSelected';
import PortfolioListing from './PortfolioListing';
import PortfolioListingContainer from './PortfolioListingContainer';
import { MainContainer } from '../helpers';
import { StaticQuery, graphql } from 'gatsby';

export class PortfolioPage extends Component {
  render() {
    // const { data } = this.props;

    return (
      <StaticQuery
        query={graphql`
          # query PortfolioQuery($slug: String!) {
          #   # slug is the context that is being passed through via gatsby-node.js
          #   contentfulPortfolioProject(slug: { eq: $slug }) {
          query PortfolioQuery {
            # slug is the context that is being passed through via gatsby-node.js
            contentfulPortfolioProject {
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
                resize(width: 900) {
                  src
                }
              }
            }
            # allContentfulPortfolioProject(
            #   sort: { fields: [createdAt], order: DESC }
            #   filter: { slug: { ne: $slug } }
            # ) {
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
        `}
        render={data => {
          if (!data) return null;
          return (
            <MainContainer>
              <PortfolioSelected project={data.contentfulPortfolioProject} />
              <PortfolioListingContainer>
                {data.allContentfulPortfolioProject.edges.map(({ node }) => (
                  <PortfolioListing project={node} key={node.id} />
                ))}
              </PortfolioListingContainer>
            </MainContainer>
          );
        }}
      />
    );
  }
}

export default PortfolioPage;
