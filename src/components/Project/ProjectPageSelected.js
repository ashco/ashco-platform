import React, { PureComponent } from 'react';

import ProjectItemSelected from './ProjectItemSelected';
import ProjectItem from './ProjectItem';
import { ProjectsContainer as ProjectContainer } from '../../pages/projects';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { media } from '../../config/media';

class ProjectPageSelected extends PureComponent {
  render() {
    const { data } = this.props;
    if (!data) return null;
    // console.log(data.contentfulProjectProject.title);
    return (
      <ProjectContainer>
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
        <ProjectExtraItemsWrapper>
          {data.allContentfulPortfolioProject.edges.map(({ node }) => (
            <ProjectItem project={node} selected={true} key={node.id} />
          ))}
        </ProjectExtraItemsWrapper>
      </ProjectContainer>
    );
  }
}

const ProjectExtraItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .gatsby-image-wrapper {
    width: 90vw;
  }
  ${media.laptop`
    .gatsby-image-wrapper {
      margin: 0;
      /* max-width: ${(props) => (props.selected ? '460px' : '90%')}; */
      /* max-width: 90%; */
      /* width: 47vw;
      height: 31vw; */
      width: 47vw;
      height: 31vw;
      max-width: 460px;
      max-height: 320px;
    }
  `};
`;

export default ProjectPageSelected;

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
