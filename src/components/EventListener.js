import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

// Component runs event listeners and runs update fncs when events trigger
export class EventListener extends Component {
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScrollState, 100));
    window.addEventListener('resize', debounce(this.handleResize, 100));
    this.handleScrollState();
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollState);
    window.removeEventListener('resize', this.handleResize);
  }

  // componentDidUpdate() {
  //   // this.handleScrollState();
  // }

  setHeroImg(showHeroImg) {
    if (showHeroImg && !this.props.value.showHeroImg) {
      this.props.value.handleHeroImg(true);
    } else if (!showHeroImg && this.props.value.showHeroImg) {
      this.props.value.handleHeroImg(false);
    }
  }

  setMenu(showMenu) {
    if (showMenu && !this.props.value.showMenu) {
      this.props.value.toggleMenu(true);
    } else if (!showMenu && this.props.value.showMenu) {
      this.props.value.toggleMenu(false);
    }
  }

  setFooterLeft(showFooterLeft) {
    if (showFooterLeft && !this.props.value.showFooterLeft) {
      this.props.value.handleFooterLeft(true);
    } else if (!showFooterLeft && this.props.value.showFooterLeft) {
      this.props.value.handleFooterLeft(false);
    }
  }

  setFooterCenter(showFooterCenter) {
    if (showFooterCenter && !this.props.value.showFooterCenter) {
      this.props.value.handleFooterCenter(true);
    } else if (!showFooterCenter && this.props.value.showFooterCenter) {
      this.props.value.handleFooterCenter(false);
    }
  }

  setFooterRight(showFooterRight) {
    if (showFooterRight && !this.props.value.showFooterRight) {
      this.props.value.handleFooterRight(true);
    } else if (!showFooterRight && this.props.value.showFooterRight) {
      this.props.value.handleFooterRight(false);
    }
  }

  calcShowStates() {
    const { isHome, isMobile } = this.props.value;

    let scrollLength;
    let windowHeight;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    const mobileMarginTopLength = 140;
    // const marginBottomLength = 300;
    // const extraMobileMenuMargin = 300;

    // console.log({ scrollLength });
    // console.log({ windowHeight });

    const obj = {};

    //

    // HEROIMG
    obj.showHeroImg =
      scrollLength < (windowHeight + mobileMarginTopLength) * 0.7;
    if (!isMobile && isHome) {
      obj.showHeroImg = true;
    } else if (!isMobile && !isHome) {
      obj.showHeroImg = false;
    }
    // FOOTER LEFT
    obj.showFooterLeft = windowHeight - scrollLength <= 0;
    if (!isHome && !isMobile) {
      obj.showFooterLeft = true;
    }
    // FOOTER CENTER
    obj.showFooterCenter = scrollLength > 0;
    if (!isHome) {
      obj.showFooterCenter = false;
    }
    // FOOTER RIGHT
    obj.showFooterRight =
      scrollLength > (windowHeight + mobileMarginTopLength) * 0.7;
    if (!isMobile) {
      obj.showFooterRight = true;
    }
    // } else if (isMobile && !isHome) {
    //   showFooterRight = true;
    // }
    return obj;
  }

  handleScrollState = event => {
    const obj = this.calcShowStates();

    this.setHeroImg(obj.showHeroImg);
    this.setFooterLeft(obj.showFooterLeft);
    this.setFooterCenter(!obj.showFooterCenter);
    this.setFooterRight(obj.showFooterRight);
  };

  handleResize = event => {
    const obj = this.calcShowStates();
    console.log('hit');
    this.props.value.updateIsMobile();
    this.setHeroImg(obj.showHeroImg);
    this.setFooterLeft(obj.showFooterLeft);
    // this.setFooterCenter(!obj.showFooterCenter);
    this.setFooterRight(obj.showFooterRight);
  };

  render() {
    return <div />;
  }
}

export default EventListener;
