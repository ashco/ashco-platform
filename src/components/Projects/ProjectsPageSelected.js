import React, { PureComponent } from 'react';

import ProjectItemSelected from './ProjectItemSelected';
import { ProjectItem } from './ProjectItem';
import {
  ProjectsContainer,
  StyledProjectItemsContainer,
} from '../../pages/projects';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

class ProjectsPageSelected extends PureComponent {
  render() {
    const { data } = this.props;
    if (!data) return null;

    return (
      <ProjectsContainer>
        <Helmet
          title={data.contentfulPortfolioProject.title}
          meta={[
            {
              name: 'description',
              content: data.contentfulPortfolioProject.description.description,
            },
          ]}
        />
        <ProjectItemSelected project={data.contentfulPortfolioProject} />
        <StyledProjectItemsContainer>
          {data.allContentfulPortfolioProject.edges.map(({ node }) => (
            <ProjectItem project={node} selected={true} key={node.id} />
          ))}
        </StyledProjectItemsContainer>
      </ProjectsContainer>
    );
  }
}

export default ProjectsPageSelected;

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
