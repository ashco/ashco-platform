import React, { PureComponent } from 'react';
import styled from 'styled-components';

import AnchorPoint from '../components/AnchorPoint';
import About from '../components/Main/AboutSection';
import Portfolio from '../components/Main/PortfolioSection';
import Blog from '../components/Main/BlogSection';
import Contact from '../components/Main/ContactSection';
import { StaticQuery, graphql } from 'gatsby';

import { DefaultContainer } from '../components/helpers';

class IndexPage extends PureComponent {
  render() {
    return (
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
            {/* <AnchorPoint id="home" />
            <About />
            <Portfolio projects={data.allContentfulPortfolioProject.edges} />
            <Blog posts={data.allContentfulBlogPost.edges} />
            <Contact /> */}
          </MainContainer>
        )}
      />
    );
  }
}

const MainContainer = styled(DefaultContainer)``;

export default IndexPage;
