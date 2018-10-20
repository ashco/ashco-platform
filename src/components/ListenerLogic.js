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
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    const mobileMarginTopLength = 140;
    // const bodyBorderLength = 7;
    let bodyLength = 600;
    if (typeof document !== 'undefined') {
      // bodyLength = document.getElementById('body').offsetHeight;
      console.log(document.getElementById('body'));
    }
    const marginBottomLength = 240;
    // const extraMobileMenuMargin = 300;
    const midScreenPoint = (windowHeight + mobileMarginTopLength) * 0.7;
    const bottomScreenPoint =
      mobileMarginTopLength +
      // bodyBorderLength * 2 +
      bodyLength +
      marginBottomLength -
      windowHeight;

    const obj = {
      showHeroImg: false,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
    };

    console.log({ bottomScreenPoint });

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
      // if () {

      console.log({ scrollLength });
      console.log({ windowHeight });
      obj.showFooterLeft = true;
      obj.showFooterRight = true;
      // }
      // DEFAULT
    } else {
      // HEROIMG
      if (isHome) {
        obj.showHeroImg = true;
      }
      // FOOTER LEFT
      if (isHome) {
        obj.showFooterLeft = windowHeight - scrollLength <= 0;
      } else {
        obj.showFooterLeft = true;
      }
      // FOOTER RIGHT
      obj.showFooterRight = true;
    }

    // FOOTER CENTER - ALL SIZES
    if (isHome) {
      obj.showFooterCenter = scrollLength <= 100;
      console.log(obj.showFooterCenter);
    }
    // DEFAULT

    // HEROIMG
    // obj.showHeroImg = scrollLength < midScreenPoint;
    // if (!isMobile && isHome) {
    //   obj.showHeroImg = true;
    // } else if (!isMobile && !isHome) {
    //   obj.showHeroImg = false;
    // }

    // // FOOTER LEFT
    // obj.showFooterLeft = windowHeight - scrollLength <= 0;
    // if (!isHome && !isMobile) {
    //   obj.showFooterLeft = true;
    // }
    // // FOOTER CENTER
    // obj.showFooterCenter = scrollLength > 0;
    // if (!isHome) {
    //   obj.showFooterCenter = false;
    // }
    // // FOOTER RIGHT
    // const midPagePoint = (windowHeight + mobileMarginTopLength) * 0.7;

    // if (isMobile) {
    //   obj.showFooterRight = scrollLength > midPagePoint;
    // } else {
    //   obj.showFooterRight = true;
    // }
    // console.log(obj);
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
    this.setFooterCenter(!obj.showFooterCenter);
    this.setFooterRight(obj.showFooterRight);
  }

  render() {
    return <div />;
  }
}

export default ListenerLogic;
