import React, { Component } from 'react';
import { PageTitle } from '../helpers';

const BlogPage = ({ data }) => {
  if (!data) return null;
  const isHeroImage = data.contentfulBlogPost.heroImage;

  return (
    <div>
      <PageTitle text={data.contentfulBlogPost.title} />
      <span>{data.contentfulBlogPost.createdAt}</span>
      {isHeroImage && (
        <img
          src={data.contentfulBlogPost.heroImage.resize.src}
          alt={data.contentfulBlogPost.heroImage.title}
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
        }}
      />
    </div>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      createdAt(formatString: "MMMM DD, YYYY")
      heroImage {
        id
        title
        resize(width: 600) {
          src
          width
          height
          aspectRatio
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`;
