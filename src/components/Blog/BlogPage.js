import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
  DefaultContainer,
  // HeaderTextContainer,
  SectionTitle,
  Tag,
  TagContainer,
} from '../helpers';

const BlogPage = ({ data }) => {
  if (!data) return null;
  const isHeroImage = data.contentfulBlogPost.heroImage;
  // const hasTags = data.contentfulBlogPost.tags;
  return (
    <BlogPageWrapper>
      <SectionTitle>{data.contentfulBlogPost.title}</SectionTitle>
      {/* <HeaderTextContainer>
        <h2>{data.contentfulBlogPost.title}</h2>
      </HeaderTextContainer> */}
      {isHeroImage && (
        <img
          src={data.contentfulBlogPost.heroImage.resize.src}
          alt={data.contentfulBlogPost.heroImage.title}
        />
      )}
      {/* {hasTags && (
          <TagContainer>
            {data.contentfulBlogPost.tags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
          </TagContainer>
        )} */}
      <div className="createdAt">
        <p>{data.contentfulBlogPost.createdAt}</p>
      </div>
      <div
        className="postContent"
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
        }}
      />
    </BlogPageWrapper>
  );
};

const BlogPageWrapper = styled(DefaultContainer)`
  max-width: 720px;
  width: 90%;
  img {
    width: 100%;
    margin: 0.5rem 0;
  }
  /* div,
  h2 {
    width: 90%;
    margin: auto;
  } */
  div.createdAt {
    border-bottom: 2px solid ${props => props.theme.colorPrimary}90;
    margin-bottom: 1rem;
    padding-right: 2rem;
    p {
      margin-bottom: 0.5rem;
    }
  }
  div.postContent {
    p {
      font-size: 1.1rem;
      line-height: 1.1;
    }
  }
`;

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
        resize(width: 720) {
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
