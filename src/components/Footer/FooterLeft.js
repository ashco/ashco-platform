import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/config';

const FooterLeft = ({ showFooterLeft }) => {
  const year = new Date().getFullYear();
  return (
    <FooterLeftWrapper
      className={showFooterLeft ? 'visible-fade' : 'hidden-fade'}
    >
      <p>© {year} Copyright Ashton Christie. All rights reserved.</p>
      <p>
        This site is built with{' '}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsbyjs
        </a>{' '}
        and{' '}
        <a
          href="https://www.contentful.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contentful
        </a>
        . The source code is hosted on{' '}
        <a
          href="https://github.com/ashco/ashco-platform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </p>
    </FooterLeftWrapper>
  );
};

const FooterLeftWrapper = styled.div`
  flex: 100;
  line-height: 1.3rem;
  text-align: center;
  font-size: 0.85rem;
  margin: 0rem 1.5rem 1.5rem 1.5rem;
  p {
    margin: 0;
  }
  a {
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colorLighter}cc;
      /* border-bottom: 1px solid;
      border-image: linear-gradient(to right, ${props =>
        props.theme.colorPrimary} 0%,${props =>
  props.theme.colorSecondary} 100%);
      border-image-slice: 1; */
    }
  }
  ${media.tablet`
    text-align: left;
    font-size: 1rem;
    margin: 0rem 1rem 1rem 1rem;
  `};
  ${media.laptop`
    margin: 0rem 1.5rem 1.5rem 1.5rem;
  `};
`;

export default FooterLeft;
