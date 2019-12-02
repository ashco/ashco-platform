import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../config/media';

export const DefaultContainer = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 990px;
  margin: auto;
  /* margin: 1.5rem auto; */
  >*:last-child {
    margin-bottom: 1.5rem;
  }
  ${media.tablet`
    box-shadow: 0px 0px 60px -25px inset ${({ theme }) => theme.colorPrimary};
    /* margin: 3rem auto; */
  `};
  ${media.laptop`
    >*:last-child {
      margin-bottom: 3rem;
    }
  `}
`;

export const HeaderTextContainer = styled.div`
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  >* {
    text-align: center;
    margin-bottom: 12px;
    :last-child {
      margin-bottom: 0;
    }
  }
  h2 {
    line-height: 1em;
    font-weight: 600;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colorPrimary};
    border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
    padding: 0 1.5rem 0.6rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.1em;
  }
  ${media.tablet`
    h2 {
      font-size: 2rem;
    }
  `};
  ${media.laptop`
    width: 80%;
    margin: 3rem auto;
    h2 {
      border-bottom-width: 5px;
      font-size: 2.5rem;
    }
  `};
  ${media.desktop`
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 2.8rem;
    }
  `};
`;

// export const HeaderText = styled.h2`
//     font-size: 1.9rem;
//     font-weight: 600;
//     color: ${({ theme }) => theme.colorPrimary};
//     border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
//     padding: 0 1.5rem 0.6rem 1.5rem;
//     @media (min-width: ${sizes.laptop}px) {
//       border-bottom: 5px solid ${({ theme }) => theme.colorPrimary};
//       width: 60%;
//       font-size: 2.8rem;
//     }
// `;

export const PageLink = ({ to, text }) => (
  <PageLinkWrapper>
    <Link to={to}>{text}</Link>
  </PageLinkWrapper>
);

const PageLinkWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colorText};
    font-size: 1.5rem;
  }
`;

export const Tag = styled.div`
  background: #2c768e;
  height: 30px;
  width: 60px;
  margin: 10px;
`;

export const TagContainer = styled.div`
  display: flex;
`;
