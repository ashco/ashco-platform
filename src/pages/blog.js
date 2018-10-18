import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BlogListing from '../components/Blog/BlogListing';
import { MainContainer, ContentWrapper } from '../components/helpers';

const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query BlogList {
        allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
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
    `}
    render={data => (
      <MainContainer>
        <ContentWrapper width="900px">
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <BlogListing post={node} key={node.id} />
          ))}
        </ContentWrapper>
      </MainContainer>
    )}
    // render={data => (
    //   <MainContainer>
    //     <ContentWrapper width="900px">
    //       {data.allContentfulBlogPost.edges.map(({ node }) => (
    //         <BlogListing post={node} key={node.id} />
    //       ))}
    //     </ContentWrapper>
    //   </MainContainer>
    // )}
  />
);

export default BlogPage;
