import React, { Component } from 'react';
import styled from 'styled-components';

import isEqual from 'lodash.isequal';

import { HiddenContextConsumer } from './Context/HiddenContext';

import NavArrow from './Icons/NavArrow';
import GithubIcon from './Icons/Github';
import LinkedInIcon from './Icons/LinkedIn';
import TwitterIcon from './Icons/Twitter';
import ResumeIcon from './Icons/Resume';

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = this.handleFooterState();
  //   this.state = {
  //     // showFooterLeft: true,
  //     // showFooterCenter: true,
  //     // showFooterRight: true,
  //   };
  // }

  // componentWillMount() {
  //   const stateObj = this.handleFooterState();

  //   if (!isEqual(stateObj, this.state)) {
  //     this.setState(stateObj);
  //   }
  // }

  // componentDidUpdate() {
  //   const stateObj = this.handleFooterState();

  //   if (!isEqual(stateObj, this.state)) {
  //     this.setState(stateObj);
  //   }
  // }

  // handleFooterState() {
  //   const {
  //     pageScrolled,
  //     pageMiddle,
  //     pageBottom,
  //     isHome,
  //     isMobile,
  //   } = this.props;
  //   let stateObj = {
  //     showFooterLeft: false,
  //     showFooterCenter: false,
  //     showFooterRight: false,
  //   };

  //   if (isMobile) {
  //     if (pageBottom) {
  //       stateObj = {
  //         showFooterLeft: true,
  //         showFooterRight: true,
  //       };
  //     } else {
  //       stateObj = {
  //         showFooterLeft: false,
  //         showFooterRight: false,
  //       };
  //     }
  //   } else {
  //     if (isHome) {
  //       if (!pageMiddle) {
  //         stateObj = {
  //           showFooterLeft: false,
  //           showFooterRight: true,
  //         };
  //       } else {
  //         stateObj = {
  //           showFooterLeft: true,
  //           showFooterRight: true,
  //         };
  //       }
  //     } else {
  //       stateObj = {
  //         showFooterLeft: true,
  //         showFooterRight: true,
  //       };
  //     }
  //   }
  //   stateObj.showFooterCenter = isHome && !pageScrolled ? true : false;
  //   return stateObj;
  // }

  render() {
    // const { toggleMenu } = this.props;
    // const { showFooterCenter, showFooterRight } = this.state;

    return (
      <HiddenContextConsumer>
        {({ showFooterLeft, showFooterCenter, showFooterRight }) => (
          <FooterWrapper>
            <FooterLeft showFooterLeft={showFooterLeft} />
            <FooterCenter showFooterCenter={showFooterCenter} />
            <FooterRight showFooterRight={showFooterRight} />
          </FooterWrapper>
        )}
      </HiddenContextConsumer>
    );
  }
}

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
        <a
          href="https://github.com/ashco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ashtonchristie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/AshCo_Io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResumeIcon />
        </a>
      </li>
    </ul>
  </FooterRightWrapper>
);

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
  @media (min-width: ${props => props.theme.widthTablet}) {
    flex-direction: row;
    align-items: flex-end;
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    margin-left: ${props => props.theme.desktopBodySideMargin};
    margin-right: ${props => props.theme.desktopBodySideMargin};
    width: calc(
      100vw - (${props => props.theme.desktopBodySideMargin} * 2) -
        (${props => props.theme.mainBorderSize} * 2)
    );
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    margin-left: ${props => props.theme.HDBodySideMargin};
    margin-right: ${props => props.theme.HDBodySideMargin};
    width: calc(
      100vw - (${props => props.theme.HDBodySideMargin} * 2) -
        (${props => props.theme.mainBorderSize} * 2)
    );
  }
`;

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
      border-bottom: 1px solid ${props => props.theme.colorPrimary}cc;
    }
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    text-align: left;
    font-size: 1rem;
  }
`;

const FooterCenterWrapper = styled.div`
  flex: 1;
  margin: 0;
  position: absolute;
  top: 15vh;
  transition: visibility 0.25s 10s, opacity 0.25s linear;
  @media (min-width: ${props => props.theme.widthTablet}) {
    position: initial;
    display: flex;
    justify-content: center;
  }
`;

const FooterRightWrapper = styled.div`
  flex: 100;
  display: flex;
  justify-content: flex-end;
  margin: 0 1.5rem 1.5rem 1.5rem;
  ul {
    display: flex;
    li {
      margin: 0 0.75rem;
      a {
        &:hover {
          border-bottom: 4px solid ${props => props.theme.colorPrimary}cc;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin-right: 0;
  }
`;

export default Footer;
