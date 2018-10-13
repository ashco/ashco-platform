import React, { Component } from 'react';
import styled from 'styled-components';

const NavArrowStyle = styled.div`
  position: absolute;
  top: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
  }
`;

class NavArrow extends Component {
  state = {
    showNavArrow: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    let showNavArrow = window.pageYOffset <= window.innerHeight * 0.35;

    if (showNavArrow !== this.state.showNavArrow) {
      this.setState({
        showNavArrow: showNavArrow,
      });
    }
  };

  render() {
    return (
      this.state.showNavArrow && (
        <NavArrowStyle>
          <a href="#home">V{/* <img href=""></img> */}</a>
        </NavArrowStyle>
      )
    );
  }
}

export default NavArrow;
