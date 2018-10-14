import React, { Component } from 'react';
import styled from 'styled-components';

const NavArrowStyle = styled.button`
  pointer-events: auto;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colorText};
  background: transparent;
  border: none;
`;

class NavArrow extends Component {
  // state = {
  //   showNavArrow: true,
  // };

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = event => {
  //   let showNavArrow = window.pageYOffset <= window.innerHeight * 0.35;

  //   if (showNavArrow !== this.state.showNavArrow) {
  //     this.setState({
  //       showNavArrow: showNavArrow,
  //     });
  //   }
  // };

  scroll() {
    document
      .querySelector('#home')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    return <NavArrowStyle onClick={this.scroll}>V</NavArrowStyle>;
  }
}

export default NavArrow;
