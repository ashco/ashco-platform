import React, { Component } from 'react';
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
  a {
    pointer-events: auto;
    color: ${props => props.theme.colorPrimary};
    transition: border-bottom 0.2s ease-out;
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

const FooterLeftWrapper = styled.div`
  flex: 100;
  line-height: 1.3rem;
  text-align: center;
  font-size: 0.85rem;
  margin: 0;
  a {
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colorPrimary};
    }
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    text-align: left;
    font-size: 1rem;
  }
`;

const FooterCenterWrapper = styled.div`
  flex: 1;
  display: none;
  @media (min-width: ${props => props.theme.widthTablet}) {
    display: flex;
    justify-content: center;
  }
`;

const FooterRightWrapper = styled.div`
  flex: 100;
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    /* color: ${props => props.theme.colorPrimary}; */
    li {
      margin: 0 0.75rem;
      a {
        /* pointer-events: auto; */
        /* transition: border-bottom .2s ease-out; */
        &:hover {
          border-bottom: 3px solid ${props => props.theme.colorPrimary};
        }
      }
    }
  }
`;

class Footer extends Component {
  state = {};

  componentDidUpdate() {
    const { pageScrolled, pageBottom, isHome } = this.props;

    const showFooter = window.innerWidth >= 750 || this.props.pageBottom;
    const showFooterLeft = !isHome || pageScrolled;
    const showNavArrow = isHome && !pageScrolled;

    if (showFooter !== this.state.showFooter) {
      this.setState({
        showFooter,
      });
    }
    if (showFooterLeft !== this.state.showFooterLeft) {
      this.setState({
        showFooterLeft,
      });
    }
    if (showNavArrow !== this.state.showNavArrow) {
      this.setState({
        showNavArrow,
      });
    }
  }

  render() {
    // const { pageScrolled, pageBottom, isHome } = this.props;
    const { showFooter, showFooterLeft, showNavArrow } = this.state;

    // const showFooter = window.innerWidth >= 750 || pageBottom;
    // const showFooterLeft = !isHome || pageScrolled;
    // const showNavArrow = isHome && !pageScrolled;
    const year = new Date().getFullYear();

    return (
      <FooterWrapper className={showFooter ? 'visible-fade' : 'hidden-fade'}>
        <FooterLeft showFooterLeft={showFooterLeft} year={year} />
        <FooterCenter showNavArrow={showNavArrow} />
        <FooterRight />
      </FooterWrapper>
    );
  }
}

const FooterLeft = ({ showFooterLeft, year }) => (
  <FooterLeftWrapper className={showFooterLeft ? 'visible' : 'hidden'}>
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
  </FooterLeftWrapper>
);

const FooterCenter = ({ showNavArrow }) => (
  <FooterCenterWrapper className={showNavArrow ? 'visible' : 'hidden'}>
    <NavArrow />
  </FooterCenterWrapper>
);

const FooterRight = () => (
  <FooterRightWrapper>
    <ul>
      <li>
        <a href="https://github.com/ashco" target="_blank">
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ashtonchristie/" target="_blank">
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
  </FooterRightWrapper>
);

export default Footer;
