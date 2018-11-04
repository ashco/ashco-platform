import React, { PureComponent } from 'react';

import PortfolioItemSelected from './PortfolioItemSelected';
import PortfolioItem from './PortfolioItem';
import PortfolioContainer from './PortfolioContainer';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Helmet from 'react-helmet';

class PortfolioPageSelected extends PureComponent {
  render() {
    const { data } = this.props;
    if (!data) return null;
    // console.log(data.contentfulPortfolioProject.title);
    return (
      <PortfolioContainer>
        <Helmet title={data.contentfulPortfolioProject.title} meta={[{ name: 'description', content: (data.contentfulPortfolioProject.description.description) }]} />
        <PortfolioItemSelected project={data.contentfulPortfolioProject} />
        <PortfolioExtraItemsWrapper>
          {data.allContentfulPortfolioProject.edges.map(({ node }) => (
            <PortfolioItem project={node} key={node.id} />
          ))}
        </PortfolioExtraItemsWrapper>
      </PortfolioContainer>
    );
  }
}

const PortfolioExtraItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
          ...GatsbyContentfulFluid_withWebp
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
              ...GatsbyContentfulFluid_withWebp
            }
          }
          githubLink
          liveSiteLink
        }
      }
    }
  }
`;
