import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { media, sizes } from '../../config/media';
// import { themeArr_invert, themeArr_color } from '../../config/config';

import SelectedIconWrapper from '../Animation/SelectedIcon';
import AshCoIcon from '../Icons/ashco-v2';
import { Button } from '../Buttons';

class HeaderTitle extends PureComponent {
  state = {
    menuActive: true,
  };


  handleIconClick = () => {
    const {
      isHome,
      toggleColorMenu,
      toggleNavMenu,
      colorMenuOpen,
    } = this.props;

    let noScroll;
    if (typeof window !== `undefined`) {
      noScroll = window.pageYOffset === 0;
    }
    // Only show menu text on first click, only open menu if at top of home screen
    if (!colorMenuOpen && noScroll && isHome) {
      toggleColorMenu(true);
      setTimeout(() => {
        this.setState({
          menuActive: false,
        });
      }, 3000);
    } else {
      toggleColorMenu(false);
    }
    toggleNavMenu(true);
  };


  getPageTitle() {
    const siteTitles = ['About', 'Projects', 'Blog', 'Contact'];
    let pageTitle = this.props.pathname.split('/')[1];
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    if (siteTitles.some(title => title === pageTitle)) {
      return pageTitle;
    }
  }

  render() {
    const { isHome, colorMenuOpen } = this.props;

    const pageTitle = this.getPageTitle();


    return (
      <HeaderTitleWrapper isHome={isHome}>
        <Link to="/" aria-label="hero-screen" onClick={this.handleIconClick}>
          <SelectedIconWrapper open={colorMenuOpen}>
            <AshCoIcon />
          </SelectedIconWrapper>
        </Link>
        {!isHome &&
          <h1>{pageTitle}</h1>
        }
      </HeaderTitleWrapper>
    );
  }
}


const HeaderTitleWrapper = styled.div`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  padding-top: ${({ isHome }) => isHome ? '40px' : '10px'};
  svg {
    height: ${({ isHome }) => isHome ? '120px' : '75px'};
    /* height: 65px; */
    width: auto;
  }
  a {
    text-decoration: none;
    pointer-events: auto;
  }
  h1 {
    margin-left: 0.8rem;
  }


  @media (min-width: ${sizes.tablet}px) {
    padding-top: ${({ isHome }) => isHome ? '85px' : '10px'};
    font-size: 2.5rem;
    svg {
      height: ${({ isHome }) => isHome ? '140px' : '75px'};
    }
  }
  @media (min-width: ${sizes.laptop}px) {
    svg {
      height: ${({ isHome }) => isHome ? '160px' : '85px'};
    }
    font-size: 3rem;
  }
  @media (min-width: ${sizes.desktop}px) {
    svg {
      height: ${({ isHome }) => isHome ? '180px' : '95px'};
    }
  };
  @media (min-width: ${sizes.hd}px) {
    svg {
      height: ${({ isHome }) => isHome ? '200px' : '105px'};
    }
  }
`;


export default HeaderTitle;
