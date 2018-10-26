import React, { Component } from 'react';
import styled from 'styled-components';

import AnchorPoint from '../components/AnchorPoint';
import About from '../components/Main/AboutSection';
import Portfolio from '../components/Main/PortfolioSection';
import Blog from '../components/Main/BlogSection';
import Contact from '../components/Main/ContactSection';
import { StaticQuery, graphql } from 'gatsby';

import { Button } from './contact';
import { DefaultContainer } from '../components/helpers';
import { themeArr } from '../config/config';

class IndexPage extends Component {
  // handleColor(colorObj) {
  //   console.log(colorObj);
  //   localStorage.setItem('themeObj', JSON.stringify(colorObj));
  // }

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
            <AnchorPoint id="home" />
            <About />
            <Portfolio projects={data.allContentfulPortfolioProject.edges} />
            <Blog posts={data.allContentfulBlogPost.edges} />
            <Contact />
            {/* {themeArr.map((themeObj, i) => {
              return (
                <ButtonColor
                  onClick={this.handleColor.bind(null, themeObj)}
                  themeObj={themeObj}
                  key={i}
                />
              );
            })} */}
          </MainContainer>
        )}
      />
    );
  }
}

const MainContainer = styled(DefaultContainer)`
  /* height: 77vh; */
`;

// const ButtonColor = styled(Button)`
//   border: 6px solid ${props => props.themeObj.colorPrimary};
//   border-radius: 50%;
//   padding: 0.6rem;
//   margin: 0.3rem;
// `;

export default IndexPage;
