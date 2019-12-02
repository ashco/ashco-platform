import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';
import FadeWrapper from '../Animation/Fade';
import ColorMenu from './ColorMenu';

class FooterLeft extends PureComponent {
  render() {
    const { showFooterLeft, themeObj, isHome, updateTheme } = this.props;
    const year = new Date().getFullYear();
    return (
      <FooterLeftWrapper>
        {isHome
          ? <ColorMenu themeObj={themeObj} updateTheme={updateTheme}></ColorMenu>
          : <FadeWrapper visible={showFooterLeft}>
            <p>© {year} Copyright Ash Christie. All rights reserved.</p>
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
          </FadeWrapper>}
      </FooterLeftWrapper>
    );
  }
}

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
      border-bottom: 1px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
  ${media.tablet`
    text-align: left;
    font-size: 1rem;
    margin: 0rem 1rem 1.5rem 1rem;
  `};
  ${media.laptop`
    margin: 0rem 1.5rem 1.5rem 1.5rem;
  `};
  @media (min-width: 1604px) {
    margin-bottom: 1.7rem;
  }
`;

export default FooterLeft;
