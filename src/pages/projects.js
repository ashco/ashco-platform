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
          <h2>Portfolio Header.</h2>
          <p>
            I work hard for the moula.
          </p>
        </HeaderTextContainer>
        {data.allContentfulPortfolioProject.edges.map(({ node }) => (
          <PortfolioItem project={node} key={node.id} />
        ))}
      </ProjectsContainer>
    )}
  />
);




export const ProjectsContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1040px;
  /* margin: 0 auto 1rem auto; */
  ${media.laptop`
    /* margin: 2rem auto; */
  `};
  ${media.hd`
    max-width: 1380px;
  `};
`;

export default PortfolioPage;
