import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { media } from '../../config/media';

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <Link to={`blog/${post.slug}`}>
      <h3>{post.title}</h3>
      <p className="createdAt">{post.createdAt}</p>
      <p className="excerpt">{post.body.childMarkdownRemark.excerpt}</p>
    </Link>
  </BlogListingWrapper>
);

const BlogListingWrapper = styled.article`
  margin-bottom: 0.8rem;
  padding: 0.3rem 0.5rem;
  border-left: 0.25rem solid transparent;
  a {
    color: ${({ theme }) => theme.colorText};
    h3 {
      color: ${({ theme }) => theme.colorPrimary};
      margin-bottom: 0.2rem;
      font-weight: 500;
    }
    p.createdAt {
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
    }
    p.excerpt {
      margin-bottom: 0;
    }
  }
  transition: border-left 0.1s ease-in;
  &:hover {
    border-left: 0.25rem solid ${({ theme }) => theme.colorDarker}70;
  }
  ${media.desktop`
    a{
      h3 {
        font-size: 1.7rem;
      }
      p.createdAt {
        font-size: 1rem;
      }
      p.excerpt {
        font-size: 1.1rem;
      }
    }
  `};
  ${media.hd`
    a {
      h3 {
        font-size: 1.9rem;
      }
      p.createdAt {
        font-size: 1.1rem;
      }
      p.excerpt {
        font-size: 1.3rem;
      }
    }
  `};
`;

export default BlogListing;
