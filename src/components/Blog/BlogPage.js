import React, { Component } from 'react';
import styled from 'styled-components';

import { SectionContainer, Tag, TagContainer } from '../helpers';

const BlogPageWrapper = styled.div``;

const BlogPage = ({ data }) => {
  if (!data) return null;
  const isHeroImage = data.contentfulBlogPost.heroImage;
  const hasTags = data.contentfulBlogPost.tags;

  return (
    <SectionContainer>
      <BlogPageWrapper>
        {isHeroImage && (
          <img
            src={data.contentfulBlogPost.heroImage.resize.src}
            alt={data.contentfulBlogPost.heroImage.title}
          />
        )}
        {hasTags && (
          <TagContainer>
            {data.contentfulBlogPost.tags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
          </TagContainer>
        )}
        <div>
          <span>{data.contentfulBlogPost.createdAt}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </BlogPageWrapper>
    </SectionContainer>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      tags
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
