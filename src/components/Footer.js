import React, { Component } from 'react';
import styled from 'styled-components';

import isEqual from 'lodash.isequal';

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
    li {
      margin: 0 0.75rem;
      a {
        &:hover {
          border-bottom: 4px solid ${props => props.theme.colorPrimary};
        }
      }
    }
  }
`;

class Footer extends Component {
  state = {
    showFooterLeft: false,
    showFooterCenter: false,
    showFooterRight: false,
  };

  componentWillMount() {
    const stateObj = this.handleFooterState();

    if (!isEqual(stateObj, this.state)) {
      this.setState(stateObj);
    }
  }

  componentDidUpdate() {
    const stateObj = this.handleFooterState();

    // console.log(stateObj);
    // console.log(this.state);
    // console.log();
    if (!isEqual(stateObj, this.state)) {
      this.setState(stateObj);
    }

    // const { pageScrolled, pageBottom, isHome, isMobile } = this.props;
    // const showFooterRight = window.innerWidth >= 750 || pageBottom;
    // const showFooterCenter = isHome && !pageScrolled;
    // const showFooterLeft = !isHome || pageScrolled;
    // if (showFooterRight !== this.state.showFooterRight) {
    //   this.setState({
    //     showFooterRight,
    //   });
    // }
    // if (showFooterLeft !== this.state.showFooterLeft) {
    //   this.setState({
    //     showFooterLeft,
    //   });
    // }
    // if (showFooterCenter !== this.state.showFooterCenter) {
    //   this.setState({
    //     showFooterCenter,
    //   });
    // }
  }

  handleFooterState() {
    const { pageScrolled, pageBottom, isHome, isMobile } = this.props;
    let stateObj = {
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
    };

    if (isMobile) {
      if (pageBottom) {
        stateObj = {
          showFooterLeft: true,
          showFooterCenter: false,
          showFooterRight: true,
        };
      } else {
        stateObj = {
          showFooterLeft: false,
          showFooterCenter: false,
          showFooterRight: false,
        };
      }
    } else {
      if (isHome) {
        if (!pageScrolled) {
          stateObj = {
            showFooterLeft: false,
            showFooterCenter: true,
            showFooterRight: true,
          };
        } else {
          stateObj = {
            showFooterLeft: true,
            showFooterCenter: false,
            showFooterRight: true,
          };
        }
      } else {
        stateObj = {
          showFooterLeft: true,
          showFooterCenter: false,
          showFooterRight: true,
        };
      }
    }
    return stateObj;
  }

  render() {
    const { showFooterLeft, showFooterCenter, showFooterRight } = this.state;

    const year = new Date().getFullYear();
    return (
      <FooterWrapper>
        <FooterLeft showFooterLeft={showFooterLeft} year={year} />
        <FooterCenter showFooterCenter={showFooterCenter} />
        <FooterRight showFooterRight={showFooterRight} />
      </FooterWrapper>
    );
  }
}

const FooterLeft = ({ showFooterLeft, year }) => (
  <FooterLeftWrapper
    className={showFooterLeft ? 'visible-fade' : 'hidden-fade'}
  >
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

const FooterCenter = ({ showFooterCenter }) => (
  <FooterCenterWrapper className={showFooterCenter ? 'visible' : 'hidden'}>
    <NavArrow />
  </FooterCenterWrapper>
);

const FooterRight = ({ showFooterRight }) => (
  <FooterRightWrapper
    className={showFooterRight ? 'visible-fade' : 'hidden-fade'}
  >
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
