import React from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

import { themeArr_invert, themeArr_color } from '../../config/config';
import { media } from '../../config/media';

const ColorMenu = ({ themeObj, updateTheme, isAnimating }) => {
  const trail = useTrail(6, { opacity: 1, from: { opacity: 0 }, delay: 3000 });

  // const fadeIn = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  // });

  const invertThemeObj =
    themeObj.colorBackground === '#1f1f1f'
      ? themeArr_invert[1]
      : themeArr_invert[0];

  return (
    <ColorMenuButtonsWrapper>
      <MenuButtonInvert
        style={isAnimating ? trail[0] : {}}
        themeObj={invertThemeObj}
        title={invertThemeObj.title}
        onClick={() => updateTheme(invertThemeObj)}
      />
      {themeArr_color.map((themeObj, i) => {
        return (
          <MenuButtonColor
            style={isAnimating ? trail[i] : {}}
            onClick={() => updateTheme(themeObj)}
            themeObj={themeObj}
            title={themeObj.title}
            key={i}
          />
        );
      })}
    </ColorMenuButtonsWrapper>
  );
};

const ColorMenuButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button:hover {
    transform: scale(1.35);
    transition: 0.1s all ease-out;
  }
  ${media.tablet`
    position: initial;
    order: 1;
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
  border: 0.65rem solid ${({ themeObj }) => themeObj.colorBackground};
  color: ${({ themeObj }) => themeObj.colorBackground};
  padding: 0.2rem;
`;

const MenuButtonColor = styled(MenuButton)`
  border: 0.25rem solid ${({ themeObj }) => themeObj.colorPrimary};
  color: ${({ themeObj }) => themeObj.colorPrimary};
  padding: 0.35rem;
`;

export default ColorMenu;
