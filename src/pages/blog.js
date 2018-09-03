import React from 'react';
import Link from 'gatsby-link';
import BlogListing from '../components/Blog/BlogListing';

const BlogPage = ({ data }) => (
  <div>
    <h2>Blog Posts</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <BlogListing post={node} key={node.id} />
    ))}
  </div>
);

export default BlogPage;

export const query = graphql`
  query BlogList {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
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
