import React from 'react';

import AnchorPoint from '../components/AnchorPoint';
import About from '../components/Main/AboutSection';
import Portfolio from '../components/Main/PortfolioSection';
import Blog from '../components/Main/BlogSection';
import Contact from '../components/Main/ContactSection';
import { StaticQuery, graphql } from 'gatsby';

import { MainContainer, ContentWrapper } from '../components/helpers';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query PortfolioMainList {
        allContentfulPortfolioProject(
          limit: 3
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              slug
              createdAt
              image {
                id
                resize(width: 300, height: 200, resizingBehavior: SCALE) {
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
        allContentfulBlogPost(
          limit: 3
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              slug
              createdAt(formatString: "MM-DD-YYYY")
              body {
                childMarkdownRemark {
                  excerpt
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <MainContainer>
        <AnchorPoint id="home" isMobile={isMobile} />
        <ContentWrapper width="990px">
          <About />
          <Portfolio projects={data.allContentfulPortfolioProject.edges} />
          <Blog posts={data.allContentfulBlogPost.edges} />
          <Contact />
        </ContentWrapper>
      </MainContainer>
    )}
  />
);

export default IndexPage;
