import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

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

  updateColorMenu(showColorMenu) {
    this.props.value.toggleColorMenu(false);
  }

  setHeroImg(showHeroImg) {
    if (showHeroImg && !this.props.value.showHeroImg) {
      this.props.value.handleHeroImg(true);
    } else if (!showHeroImg && this.props.value.showHeroImg) {
      this.props.value.handleHeroImg(false);
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
    const topScreenPoint = scrollLength <= 50;
    const midScreenPoint = (windowHeight + mobileMarginTopLength) * 0.7;
    const bottomScreenPoint = bodyLength === scrollLength + windowHeight;

    const obj = {
      showColorMenu: false,
      showHeroImg: false,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
    };

    // COLOR MENU
    if (isHome && scrollLength === 0) {
      obj.showColorMenu = true;
    } else {
      obj.showColorMenu = false;
    }

    // MOBILE
    if (isMobile) {
      // HEROIMG
      if (!isHome) {
        obj.showHeroImg = topScreenPoint;
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
        obj.showFooterRight = true;
      }
    }
    // FOOTER CENTER - ALL SIZES
    if (isHome) {
      obj.showFooterCenter = topScreenPoint;
    }
    return obj;
  }

  handleScrollState = () => {
    const obj = this.calcShowStates();

    this.updateColorMenu(obj.showColorMenu);
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
