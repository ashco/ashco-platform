import React from 'react';
import Link from 'gatsby-link';
import BlogListing from '../components/Blog/BlogListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>Main</h2>
  </div>
);

export default IndexPage;

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
