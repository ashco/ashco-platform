import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

// Component runs event listeners and runs update fncs when events trigger
export class ListenerLogic extends Component {
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScrollState, 200));
    window.addEventListener('resize', debounce(this.handleResize, 200));
    this.handleScrollState();
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollState);
    window.removeEventListener('resize', this.handleResize);
  }

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
    let bodyLength = 600;
    const mobileMarginTopLength = 140;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    if (typeof document !== 'undefined') {
      bodyLength = document.documentElement.scrollHeight;
    }
    const topScreenPoint = scrollLength <= 100;
    const midScreenPoint = (windowHeight + mobileMarginTopLength) * 0.7;
    const bottomScreenPoint = bodyLength === scrollLength + windowHeight;

    const obj = {
      showHeroImg: false,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
    };

    // MOBILE
    if (isMobile) {
      // HEROIMG
      if (!isHome) {
        obj.showHeroImg = true;
      } else {
        obj.showHeroImg = scrollLength < midScreenPoint;
      }
      // FOOTER LEFT
      // FOOTER RIGHT
      if (bottomScreenPoint) {
        obj.showFooterLeft = true;
        obj.showFooterRight = true;
      }
      // DEFAULT SIZE
    } else {
      // HEROIMG
      if (isHome) {
        obj.showHeroImg = true;
      }
      // FOOTER LEFT
      if (bottomScreenPoint) {
        obj.showFooterLeft = true;
      }
      // FOOTER RIGHT
      if (isHome) {
        obj.showFooterRight = true;
      } else if (bottomScreenPoint) {
        console.log({ bottomScreenPoint });
        obj.showFooterRight = true;
        //   obj.showFooterRight = bottomScreenPoint ? true : false;
        // }
      }
    }
    // FOOTER CENTER - ALL SIZES
    // console.log({ topScreenPoint });
    if (isHome) {
      obj.showFooterCenter = topScreenPoint;
    }
    return obj;
  }

  handleScrollState = () => {
    const obj = this.calcShowStates();

    this.setHeroImg(obj.showHeroImg);
    this.setFooterLeft(obj.showFooterLeft);
    this.setFooterCenter(obj.showFooterCenter);
    this.setFooterRight(obj.showFooterRight);
  };

  handleResize = () => {
    const obj = this.calcShowStates();

    this.props.value.updateIsMobile();
    this.setHeroImg(obj.showHeroImg);
    this.setFooterLeft(obj.showFooterLeft);
    this.setFooterCenter(obj.showFooterCenter);
    this.setFooterRight(obj.showFooterRight);
  };

  componentDidUpdate() {
    const obj = this.calcShowStates();

    this.props.value.updateIsMobile();
    this.setHeroImg(obj.showHeroImg);
    this.setFooterLeft(obj.showFooterLeft);
    this.setFooterCenter(obj.showFooterCenter);
    this.setFooterRight(obj.showFooterRight);
  }

  render() {
    return <div />;
  }
}

export default ListenerLogic;
