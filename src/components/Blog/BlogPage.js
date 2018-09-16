import React, { Component } from 'react';
import { PageTitle } from '../helpers';

const BlogPage = ({ data }) => {
  if (!data) return null;
  const isHeroImage = data.contentfulBlogPost.heroImage;

  return (
    <div>
      <PageTitle text={data.contentfulBlogPost.title} />
      <div>
        <span>{data.contentfulBlogPost.createdAt}</span>
      </div>
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
