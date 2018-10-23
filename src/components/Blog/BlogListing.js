import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// import { HeaderTextContainer } from '../helpers';

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
  /* border-radius: 3px; */
  /* width: 90%; */
  border-left: 4px solid transparent;
  /* border: 4px solid transparent; */
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
    p.excerpt {
      margin-bottom: 0;
    }
  }
  /* ANIMATIONS */
  /* transition: border 0.1s ease-in; */
  transition: border-left 0.1s ease-in;
  &:hover {
    border-left: 4px solid ${props => props.theme.colorPrimary}90;
    /* border: 4px solid ${props => props.theme.colorPrimary}90; */
  }
`;

export default BlogListing;
