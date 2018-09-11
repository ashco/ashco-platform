import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// import BlogListing from '../components/Blog/BlogListing';
import About from '../components/Main/AboutMain';
import Blog from '../components/Main/BlogMain';
import Contact from '../components/Main/ContactMain';
import Portfolio from '../components/Main/PortfolioMain';

const IndexWrapper = styled.div`
  section {
    /* border: 1px solid red; */
  }
`;

const IndexPage = ({ data }) => (
  <IndexWrapper>
    <About />
    <Portfolio projects={data.allContentfulPortfolioProject.edges} />
    <Blog />
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
            resize(width: 400, height: 240, resizingBehavior: SCALE) {
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
  }
`;

// export const query = graphql`
//   query SiteMeta {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     allContentfulBlogPost {
//       edges {
//         node {
//           id
//           title
//           slug
//           createdAt(formatString: "MMMM DD, YYYY")
//           body {
//             childMarkdownRemark {
//               excerpt
//             }
//           }
//         }
//       }
//     }
//   }
// `;
