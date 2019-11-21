import React from 'react';

import PortfolioItem from '../components/Portfolio/PortfolioItem';
import PortfolioContainer from '../components/Portfolio/PortfolioContainer';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

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
      <PortfolioContainer>
        <Helmet title="Projects" meta={[{ name: 'description', content: "A list of digital creations by Ashton K. Christie. I'm always looking for something new to build, so sell me on your awesome idea an I'll make it a reality." }]} />
        {data.allContentfulPortfolioProject.edges.map(({ node }) => (
          <PortfolioItem project={node} key={node.id} />
        ))}
      </PortfolioContainer>
    )}
  />
);

export default PortfolioPage;
