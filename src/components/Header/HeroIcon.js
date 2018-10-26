import React, { Component } from 'react';
import styled from 'styled-components';
import { themeArr } from '../../config/config';

import AshCoIcon from '../Icons/AshCoGradient';
import { Button } from '../../pages/contact';
class HeroIcon extends Component {
  handleTheme(themeObj) {
    console.log(themeObj);
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
  }

  render() {
    return (
      <div>
        <AshCoIcon />
        {themeArr.map((themeObj, i) => {
          return (
            <ButtonColor
              onClick={this.handleColor.bind(null, themeObj)}
              themeObj={themeObj}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

const ButtonColor = styled(Button)`
  border: 6px solid ${props => props.themeObj.colorPrimary};
  border-radius: 50%;
  padding: 0.6rem;
  margin: 0.3rem;
`;

export default HeroIcon;
