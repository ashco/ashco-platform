import React, { Component } from 'react';

export class Listener extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollState);
  }

  setHeroImg(showHeroImg) {
    if (showHeroImg && !this.props.showHeroImg) {
      this.props.handleHeroImg(true);
    } else if (!showHeroImg && this.props.showHeroImg) {
      this.props.handleHeroImg(false);
    }
  }

  setFooterLeft(showFooterLeft) {
    if (showFooterLeft && !this.props.showFooterLeft) {
      this.props.handleFooterLeft(true);
    } else if (!showFooterLeft && this.props.showFooterLeft) {
      this.props.handleFooterLeft(false);
    }
  }

  setFooterCenter(showFooterCenter) {
    if (showFooterCenter && this.props.showFooterCenter) {
      this.props.handleFooterCenter(false);
    } else if (!showFooterCenter && !this.props.showFooterCenter) {
      this.props.handleFooterCenter(true);
    }
  }

  setFooterRight(showFooterRight) {
    if (showFooterRight && !this.props.showFooterRight) {
      this.props.handleFooterRight(true);
    } else if (!showFooterRight && this.props.showFooterRight) {
      this.props.handleFooterRight(false);
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

    // HEROIMG
    const showHeroImg = scrollLength < (windowHeight + marginTopLength) * 0.6;

    // LEFT
    const showFooterLeft = windowHeight + borderLength - scrollLength === 0;
    // CENTER
    const showFooterCenter = scrollLength > 0;
    // RIGHT

    this.setHeroImg(showHeroImg);
    this.setFooterLeft(showFooterLeft);
    this.setFooterCenter(showFooterCenter);
    this.setFooterRight(!showHeroImg);
  };

  render() {
    return <div />;
  }
}

export default Listener;
