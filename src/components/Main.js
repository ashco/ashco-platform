import React, { Component } from 'react';

import styled from 'styled-components';
import { sizes, media } from '../config/media';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     height: null,
  //   };
  // }
  // componentDidMount() {
  //   const marginTop = this.mainElement.getBoundingClientRect().top;
  //   const marginBottom = this.mainElement.getBoundingClientRect().bottom;
  //   const elHeight = this.mainElement.clientHeight;
  //   const height = marginTop + elHeight + marginBottom;

  //   this.setState({ height });
  // }

  render() {
    // Calculate top margin
    const { children, isMobile, isHome, menuOpen } = this.props;
    let marginTop = 100;

    if (isMobile) {
      if (typeof window !== `undefined`) {
        marginTop = isHome ? `${window.innerHeight + 140}px` : `140px`;
        if (menuOpen && !isHome) {
          console.log('blam!');
          marginTop = '400px';
        }
      }
    } else {
      marginTop = isHome ? '113vh' : '13vh';
    }

    return (
      <MainWrapper
        // ref={mainElement => {
        //   this.mainElement = mainElement;
        // }}
        marginTop={marginTop}
      >
        {children}
      </MainWrapper>
    );
  }
}
// const Body = ({ children }) => {
//   // Calculate top margin
//   // const { children, isMobile, isHome } = this.props;
//   console.log(this);
//   const bodyEl = React.createRef();
//   return <BodyWrapper ref={bodyEl}>{children}</BodyWrapper>;
// };

const MainWrapper = styled.main`
  border-top: 7px solid ${props => props.theme.colorPrimary}90;
  border-bottom: 7px solid ${props => props.theme.colorPrimary}90;
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow-y: scroll;
  width: 100vw;
  height: 530px;
  min-height: 77vh;
  /* top: 100vh; */
  margin: 0 auto 240px auto;
  margin-top: ${props => props.marginTop};
  @media (min-width: ${sizes.tablet}px) {
    /* margin: 113vh auto 10vh auto; */
    margin: 0 auto 10vh auto;
    margin-top: ${props => props.marginTop};
  }
  @media (min-width: ${sizes.laptop}px) {
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    border: 7px solid ${props => props.theme.colorPrimary}90;
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Main;
