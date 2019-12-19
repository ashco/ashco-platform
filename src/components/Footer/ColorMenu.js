import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

import { themeArr_invert, themeArr_color } from '../../config/config';
import { media } from '../../config/media';

const ColorMenu = ({ themeObj, updateTheme }) => {
  const trail = useTrail(6, { opacity: 1, from: { opacity: 0 }, delay: 3000 });

  const invertThemeObj = themeObj.colorBackground === '#1f1f1f'
    ? themeArr_invert[1]
    : themeArr_invert[0];

  function handleUpdateColorClick(themeObj) {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
    updateTheme(themeObj);
  };

  return (
    <ColorMenuButtonsWrapper>
      <MenuButtonInvert
        style={trail[0]}
        themeobj={invertThemeObj}
        title={invertThemeObj.title}
        onClick={handleUpdateColorClick.bind(null, invertThemeObj)} />
      {themeArr_color.map((themeObj, i) => {
        return (
          <MenuButtonColor
            style={trail[i]}
            onClick={handleUpdateColorClick.bind(null, themeObj)}
            themeobj={themeObj}
            title={themeObj.title}
            key={i}
          />
        );
      })}
    </ColorMenuButtonsWrapper>
  )
}

const ColorMenuButtonsWrapper = styled.div`
  position: absolute;
  bottom: 2.5vh;
  left: 6vw;
  display: flex;
  align-items: center;

  button:hover {
    transform: scale(1.35);
    transition: 0.1s all ease-out;
  }
  ${media.tablet`
    position: initial;
  `}
`;

const MenuButton = styled(animated.button)`
  cursor: pointer;
  border-radius: 50%;
  margin: 0.35rem;
  background: none;
  height: 0;
  width: 0;
  pointer-events: auto;
`;

const MenuButtonInvert = styled(MenuButton)`
  border: 0.65rem solid ${({ themeobj }) => themeobj.colorBackground};
  color: ${({ themeobj }) => themeobj.colorBackground};
  padding: 0.2rem;
`;

const MenuButtonColor = styled(MenuButton)`
  border: 0.25rem solid ${({ themeobj }) => themeobj.colorPrimary};
  color: ${({ themeobj }) => themeobj.colorPrimary};
  padding: 0.35rem;
`;

export default ColorMenu;