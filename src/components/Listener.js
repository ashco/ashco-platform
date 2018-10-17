import React, { Component } from 'react';

export class Listener extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollState);
    // window.addEventListener('resize', this.handleResize);
  }

  handleScrollState = event => {
    let scrollLength = window.pageYOffset;
    let windowHeight = window.innerHeight;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    const pageScrolled = scrollLength > 0;
    const marginLength = 300;
    const borderLength = 5;
    const extraMobileMenuMargin = 300;

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
