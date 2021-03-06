import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

export const CopyrightText = () => {
  const year = new Date().getFullYear();
  return (
    <CopyrightTextContainer>
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
        .
      </p>
    </CopyrightTextContainer>
  );
};

const CopyrightTextContainer = styled.div`
  display: grid;
  gap: 0.25rem;
  text-align: center;
  font-size: 0.8rem;
  p {
    margin-bottom: 0;
  }
  a {
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
  ${media.tablet`
    order: 2;
  `}
  ${media.laptop`
    font-size: 1rem;
  `}
`;
