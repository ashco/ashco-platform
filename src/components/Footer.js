import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import NavArrow from './Icons/NavArrow';
import GithubIcon from './Icons/Github';
import LinkedInIcon from './Icons/LinkedIn';
import TwitterIcon from './Icons/Twitter';
import ResumeIcon from './Icons/Resume';

const FooterWrapper = styled.footer`
  pointer-events: none;
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  /* margin: 2rem 0.5rem; */
  a {
    color: ${props => props.theme.colorPrimary};
  }
  div {
    margin: 0rem 1.5rem 1.5rem 1.5rem;
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    flex-direction: row;
    align-items: flex-end;
    div {
      margin: 1.5rem;
    }
  }
`;

const FooterLeft = styled.div`
  flex: 100;
  line-height: 1.3rem;
  text-align: center;
  font-size: 0.85rem;
  a {
    pointer-events: auto;
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    text-align: left;
    font-size: 1rem;
  }
`;

const FooterCenter = styled.div`
  flex: 1;
  display: none;
  @media (min-width: ${props => props.theme.widthTablet}) {
    display: flex;
    justify-content: center;
  }
`;

const FooterRight = styled.div`
  flex: 100;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    /* color: ${props => props.theme.colorPrimary}; */
    li {
      margin: 0 0.75rem;
      a {
        pointer-events: auto;
        &:hover {
          border-bottom: 3px solid ${props => props.theme.colorPrimary};
        }
      }
    }
  }
`;

const Footer = ({ pageScrolled, pageBottom, isHome }) => {
  const showFooter = window.innerWidth >= 750 || pageBottom;
  const showFooterLeft = !isHome || pageScrolled;
  const showNavArrow = isHome && !pageScrolled;
  const year = new Date().getFullYear();

  return (
    <FooterWrapper className={showFooter ? 'visible-fade' : 'hidden-fade'}>
      <FooterLeft className={showFooterLeft ? 'visible' : 'hidden'}>
        <p>© {year} Copyright Ashton Christie. All rights reserved.</p>
        <p>
          This site is built with{' '}
          <a href="https://www.gatsbyjs.org/" target="_blank">
            Gatsbyjs
          </a>{' '}
          and{' '}
          <a href="https://www.contentful.com/" target="_blank">
            Contentful
          </a>
          . The source code is hosted on{' '}
          <a href="https://github.com/ashco/ashco-platform" target="_blank">
            Github
          </a>
          .
        </p>
      </FooterLeft>
      <FooterCenter className={showNavArrow ? 'visible' : 'hidden'}>
        <NavArrow />
      </FooterCenter>
      <FooterRight>
        <ul>
          <li>
            <a href="https://github.com/ashco" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashtonchristie/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AshCo_Io" target="_blank">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view"
              target="_blank"
            >
              <ResumeIcon />
            </a>
          </li>
        </ul>
      </FooterRight>
    </FooterWrapper>
  );

  // }
};

export default Footer;
