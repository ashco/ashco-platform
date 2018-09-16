import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PageTitleWrapper = styled.div``;

const PageLinkWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.5rem;
  }
`;

export const PageTitle = ({ text }) => (
  <div>
    <h2>{text}</h2>
  </div>
);

export const PageLink = ({ to, text }) => (
  <PageLinkWrapper>
    <Link to={to}>{text}</Link>
  </PageLinkWrapper>
);
