import React, { Component } from 'react';

export class Listener extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollState);
    window.addEventListener('resize', this.handleResize);
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

  handleScrollState = event => {
    let scrollLength;
    let windowHeight;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    const borderLength = 7; // TODO: Make Global Variable
    const marginTopLength = 140;
    // const marginBottomLength = 300;
    // const extraMobileMenuMargin = 300;

    console.log({ scrollLength });
    console.log({ windowHeight });

    // HEROIMG
    let showHeroImg = scrollLength < (windowHeight + marginTopLength) * 0.7;
    if (!this.props.value.isMobile) {
      showHeroImg = true;
    }
    // LEFT
    const showFooterLeft = windowHeight + borderLength - scrollLength === 0;
    // console.log({ showFooterLeft });
    // console.log({ windowHeight });
    // // console.log({ borderLength });
    // console.log({ scrollLength });
    // CENTER
    const showFooterCenter = scrollLength > 0;
    // RIGHT

    this.setHeroImg(showHeroImg);
    this.setFooterLeft(showFooterLeft);
    this.setFooterCenter(!showFooterCenter);
    this.setFooterRight(!showHeroImg);
  };

  render() {
    return <div />;
  }
}

export default Listener;
