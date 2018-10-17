import React, { Component } from 'react';

export class Listener extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollState);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollState);
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
    if (showFooterRight && this.props.showFooterRight) {
      this.props.handleFooterRight(false);
    } else if (!showFooterRight && !this.props.showFooterRight) {
      this.props.handleFooterRight(true);
    }
  }

  handleScrollState = event => {
    let scrollLength;
    let windowHeight;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    const showFooterCenter = scrollLength > 0;
    const borderLength = 7; // TODO: Make Global Variable
    const showFooterLeft = windowHeight + borderLength - scrollLength === 0;

    const marginLength = 300;
    const extraMobileMenuMargin = 300;

    this.setFooterLeft(showFooterLeft);
    this.setFooterCenter(showFooterCenter);
    // this.setFooterRight(showFooterRight);
    // if (pageScrolled && this.props.showFooterCenter) {
    //   this.props.handleFooterCenter(false);
    // } else if (!pageScrolled && !this.props.showFooterCenter) {
    //   this.props.handleFooterCenter(true);
    // }

    // Toggle HeroImg
    // if () {

    // }
  };

  // handleResize = () => {
  //   console.log('window resized');

  //   // setTimeout(() => {
  //   //   this.updateIsMobile();
  //   // }, 1000);
  // };

  toggleHeroImg = () => {
    this.props.handleHeroImg(false);
  };

  render() {
    return <div />;
  }
}

export default Listener;
