import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../config/config';

import { DefaultContainer, Tag, TagContainer } from '../helpers';

const BlogPage = ({ data }) => {
  if (!data) return null;
  const isHeroImage = data.contentfulBlogPost.heroImage;
  // const hasTags = data.contentfulBlogPost.tags;
  return (
    <BlogPageWrapper>
      <h2>{data.contentfulBlogPost.title}</h2>
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
  h2 {
    margin-bottom: 0.25em;
    font-size: 2.2rem;
    line-height: 1em;
    font-weight: 600;
  }
  img {
    width: 100%;
    margin: 0.5rem 0;
  }
  div.createdAt {
    border-bottom: 2px solid ${props => props.theme.colorPrimary}90;
    margin-bottom: 1rem;
    padding-right: 2rem;
    font-weight: 300;
    p {
      margin-bottom: 0.5rem;
    }
  }
  div.postContent {
    p {
      font-size: 1.1rem;
      line-height: 1.25;
    }
  }
  ${media.desktop`
    max-width: 800px;
    h2 {
      font-size: 2.5rem;
    }
    div.createdAt {
      p {
        font-size: 1.1rem;
      }
    }
    div.postContent {
    p {
      font-size: 1.25rem;
    }
  }
  `};
  ${media.hd`
    max-width: 960px;
    h2 {
      font-size: 2.7rem;
    }
    div.createdAt {
      p {
        font-size: 1.2rem;
      }
    }
    div.postContent {
      p {
        font-size: 1.35rem;
        margin-bottom: 1.2rem;
      }
  `};
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
