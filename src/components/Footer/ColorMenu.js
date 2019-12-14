import React from 'react';
import styled, { keyframes } from 'styled-components';
import { themeArr_invert, themeArr_color } from '../../config/config';
import { media } from '../../config/media';

class ColorMenu extends React.Component {
  handleUpdateColor = themeObj => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
    this.props.updateTheme(themeObj);
  };

  handleUpdateColorClick = themeObj => {
    this.handleUpdateColor(themeObj);
    // setTimeout(() => this.props.toggleColorMenu(false), 500);
  };

  render() {
    const { themeObj } = this.props;

    const invertThemeObj = themeObj.colorBackground === '#1f1f1f'
      ? themeArr_invert[1]
      : themeArr_invert[0];

    return (
      <ColorMenuButtonsWrapper>
        <MenuButtonInvert
          themeObj={invertThemeObj}
          title={invertThemeObj.title}
          onClick={this.handleUpdateColorClick.bind(null, invertThemeObj)} />
        {themeArr_color.map((themeObj, i) => {
          return (
            <MenuButtonColor
              onClick={this.handleUpdateColorClick.bind(null, themeObj)}
              themeObj={themeObj}
              title={themeObj.title}
              key={i}
            />
          );
        })}
      </ColorMenuButtonsWrapper>
    )
  }
}


// const ColorMenuWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-bottom: 1.1rem;

// `;

// const ColorMenuMessage = styled.span`
//   font-size: 0.9rem;
//   font-weight: 300;
//   text-align: center;
//   line-height: 1.25;
//   padding-bottom: 0.5rem;
//   transform: scale(0.8, 0);
//   transition: 0.15s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
// `;

const menuFadeInOut = keyframes`
  0%,
  15% {
    opacity: 0;
    transform: scale(0.8, 0);
  }
  25%,
  92% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8, 0);
  }
`;

const ColorMenuButtonsWrapper = styled.div`
  position: absolute;
  bottom: 2.5vh;
  left: 6vw;
  display: flex;
  align-items: center;

  /* animation */
  animation: ${menuFadeInOut} 3s;


  button:hover {
    transform: scale(1.35);
    transition: 0.1s all ease-out;
  }
  ${media.tablet`
    position: initial;
  `}
`;

const MenuButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  margin: 0.35rem;
  background: none;
  height: 0;
  width: 0;
  pointer-events: auto;
`;

const MenuButtonInvert = styled(MenuButton)`
  border: 0.65rem solid ${({ themeObj }) => themeObj.colorBackground};
  color: ${({ themeObj }) => themeObj.colorBackground};
  padding: 0.2rem;
`;

const MenuButtonColor = styled(MenuButton)`
  border: 0.25rem solid ${({ themeObj }) => themeObj.colorPrimary};
  color: ${({ theme }) => theme.colorPrimary};
  padding: 0.35rem;
`;

export default ColorMenu;