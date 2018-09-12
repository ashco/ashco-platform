import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// import BlogListing from '../components/Blog/BlogListing';
import About from '../components/Main/AboutSection';
import Portfolio from '../components/Main/PortfolioSection';
import Blog from '../components/Main/BlogSection';
import Contact from '../components/Main/ContactSection';

const IndexWrapper = styled.div`
  section {
    /* border: 1px solid red; */
  }
`;

const IndexPage = ({ data }) => (
  <IndexWrapper>
    <About />
    <Portfolio projects={data.allContentfulPortfolioProject.edges} />
    <Blog posts={data.allContentfulBlogPost.edges} />
    <Contact />
  </IndexWrapper>
);

export default IndexPage;

export const query = graphql`
  query PortfolioMainList {
    allContentfulPortfolioProject {
      edges {
        node {
          id
          title
          slug
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
    allContentfulBlogPost {
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
`;
