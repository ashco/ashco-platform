import React, { Component } from 'react';
import styled from 'styled-components';

const NavArrowStyle = styled.div`
  position: absolute;
  top: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  button {
    pointer-events: auto;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    background: transparent;
    border: none;
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

  scroll() {
    document
      .querySelector('#home')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    return (
      this.state.showNavArrow && (
        <NavArrowStyle>
          <button onClick={this.scroll}>V{/* <img href=""></img> */}</button>
        </NavArrowStyle>
      )
    );
  }
}

export default NavArrow;
