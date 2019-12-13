import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { media } from '../config/media';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import { DefaultContainer, HeaderTextContainer } from '../components/helpers';

const PortfolioPage = () => (
  <StaticQuery
    query={graphql`
      query PortfolioList {
        allContentfulPortfolioProject(sort: { fields: [order], order: DESC }) {
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
            }
          }
        }
      }
    `}
    render={data => (
      <ProjectsContainer>
        <Helmet title="Projects" meta={[{ name: 'description', content: "A list of digital creations by Ash Christie. I'm always looking for something new to build, so sell me on your awesome idea an I'll make it a reality." }]} />
        <HeaderTextContainer>
          <h2>Check out my work!</h2>
          <p>
            Here are a few of the projects that I have worked on. More coming soon!
          </p>
        </HeaderTextContainer>
        <ProjectsItemContainer>
          {data.allContentfulPortfolioProject.edges.map(({ node }) => (
            <PortfolioItem project={node} key={node.id} />
          ))}
        </ProjectsItemContainer>
      </ProjectsContainer>
    )}
  />
);




export const ProjectsContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1040px;
  ${media.hd`
    max-width: 1380px;
  `};
`;

const ProjectsItemContainer = styled.div`
  width: 90%;
`;

export default PortfolioPage;
