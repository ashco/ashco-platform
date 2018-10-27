import React, { Component } from 'react';

import styled from 'styled-components';
import { sizes, media } from '../config/media';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     height: null,
  //   };
  //   // this.mainEl = React.createRef();
  // }
  // componentDidMount() {
  //   const mainElHeight = this.mainEl.current.offsetHeight;
  //   // console.log(mainElHeight);
  //   this.props.updateMainElHeight(mainElHeight);
  //   //   const marginTop = this.mainElement.getBoundingClientRect().top;
  //   //   const marginBottom = this.mainElement.getBoundingClientRect().bottom;
  //   //   const elHeight = this.mainElement.clientHeight;
  //   //   const height = marginTop + elHeight + marginBottom;

  //   //   this.setState({ height });
  // }

  render() {
    // Calculate top margin
    const { children, isMobile, isHome, navMenuOpen } = this.props;
    let marginTop = 100;

    if (isMobile) {
      if (typeof window !== `undefined`) {
        marginTop = isHome ? `${window.innerHeight + 140}px` : `140px`;
        if (navMenuOpen && !isHome) {
          marginTop = '605px';
        }
      }
    } else {
      marginTop = isHome ? '113vh' : '13vh';
    }

    return (
      <MainWrapper marginTop={marginTop}>
        {/* <Angle1 /> */}
        {children}
      </MainWrapper>
    );
  }
}

const Angle1 = () => {
  return (
    <Angle1Wrapper>
      {/* <div className="box" /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon class="svg--sm" fill="white" points="0,100 65,21 100,100" />
        {/* <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/> */}
        {/* <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" /> */}
      </svg>
    </Angle1Wrapper>
  );
};

const Angle1Wrapper = styled.div`
  .box {
    background-color: ${props => props.theme.colorPrimary}90;
    height: 20px;
  }
  svg {
    position: relative;
    top: 0;
    background-color: ${props => props.theme.colorPrimary}90;
    height: 4vw;
    width: 100%;
    polygon {
      fill: ${props => props.theme.colorBackground};
    }
  }
`;

const MainWrapper = styled.main`
  /* border-top: 7px solid ${props => props.theme.colorPrimary}90;
  border-bottom: 7px solid ${props => props.theme.colorPrimary}90; */
  border-top: 7px solid;
  border-bottom: 7px solid;
  border-image: linear-gradient(135deg, ${props =>
    props.theme.colorDarker} 0%,${props =>
  props.theme.colorPrimary} 50%,${props => props.theme.colorLighter} 100%);
  border-image-slice: 1;

  z-index: 10;
  pointer-events: none;
  position: absolute;
  /* overflow-y: scroll; */
  overflow: auto;
  width: 100%;
  /* height: 530px; */
  /* min-height: 77vh; */
  min-height: calc(100vh - 140px - 140px);
  /* top: 100vh; */
  /* margin: 0 auto 240px auto; */
  margin: 0 auto 220px auto;
  margin-top: ${props => props.marginTop};
  background-color: ${props => props.theme.colorBackground};
  @media (min-width: ${sizes.tablet}px) {
    /* margin: 113vh auto 10vh auto; */
    /* min-height: calc(100vh - (${props => props.marginTop}) - 10vh); */
    min-height: 77vh;
    margin-bottom: 7.8rem;
    margin-top: ${props => props.marginTop};
  }
  @media (min-width: 935px) {
    margin-bottom: 6.8rem;
  }
  @media (min-width: 935px) {
    margin-bottom: 6rem;
  }
  @media (min-width: ${sizes.laptop}px) {
    /* margin: 0 auto 10vh auto; */
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    /* border: 7px solid ${props => props.theme.colorPrimary}90; */
    border: 8px solid;
    border-image: linear-gradient(135deg, ${props =>
      props.theme.colorDarker}bb 0%,${props =>
  props.theme.colorPrimary}bb 50%,${props => props.theme.colorLighter}bb 100%);
    border-image-slice: 1;
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Main;
