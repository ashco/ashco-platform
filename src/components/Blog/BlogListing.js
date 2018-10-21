import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { HeaderTextContainer } from '../helpers';

const BlogListing = ({ post }) => (
  <BlogListingWrapper>
    <Link to={`blog/${post.slug}`}>
      <h3>{post.title}</h3>
      <p className="createdAt">{post.createdAt}</p>
      <p>{post.body.childMarkdownRemark.excerpt}</p>
    </Link>
  </BlogListingWrapper>
);

const BlogListingWrapper = styled.article`
  margin-bottom: 0.4rem;
  a {
    color: ${props => props.theme.colorText};
    h3 {
      color: ${props => props.theme.colorPrimary};
      margin-bottom: 0.2rem;
    }
    p.createdAt {
      margin-bottom: 0.2rem;
      font-weight: 300;
      font-size: 0.9rem;
    }
  }
  /* ANIMATIONS */
  box-shadow: none;
  border-bottom: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  /* transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s, */
  /* transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s; */
  &:hover {
    box-shadow: rgba(140, 101, 179, 0.5) 0px 8px 20px;
    color: rgb(102, 51, 153);
    background: transparent;
    transform: translateY(-3px);
  }
`;

export default BlogListing;
