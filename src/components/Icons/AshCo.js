﻿import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { withTheme } from 'styled-components';

const AshCo = ({ theme, isAnimating }) => {
  const { colorPrimary, colorText } = theme;

  const [state, setState] = useState({
    aDeg: 0,
    cDeg: 0,
    oDeg: 0,
    oX: 0,
    oY: 0,
    oZ: 0,
  });

  const [cAnimation, cSet] = useSpring(() => ({
    transform: `rotate(0deg)`,
  }));
  const [oAnimation, oSet] = useSpring(() => ({
    transform: 'rotate3d(0, 0, 0, 0deg)',
  }));
  const [ioAnimation, ioSet] = useSpring(() => ({
    transform: 'scale(1)',
    config: { mass: 1, tension: 1070, friction: 26 },
  }));

  function handleClick() {
    if (isAnimating) {
      setState({
        aDeg: state.aDeg + 1,
        cDeg: state.cDeg + 360,
        oDeg: state.oDeg + 360,
        oX: Math.floor(Math.random() * 720) - 360,
        oY: Math.floor(Math.random() * 720) - 360,
        oZ: Math.floor(Math.random() * 720) - 360,
      });
    }
  }

  useEffect(() => {
    cSet({ transform: `rotate(${state.cDeg}deg)` });
    oSet({
      transform: `rotate3d(${state.oX}, ${state.oY}, ${state.oZ}, ${state.oDeg}deg)`,
    });
    ioSet({
      to: [{ transform: 'scale(0.8)' }, { transform: 'scale(1)' }],
    });
  });

  return (
    <svg
      width="1812px"
      height="1985px"
      viewBox="0 0 1812 1985"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ashco-logo-white"
          transform="translate(-487.000000, -374.000000)"
        >
          <g
            transform="translate(487.000000, 374.000000)"
            className="ashco-logo"
          >
            <animated.path
              d="M959.188422,102.30876 L1013.60662,205.503306 L1811.39116,1718.36454 C1780.04071,1769.36524 1744.50158,1817.51514 1705.25307,1862.33487 L905.678089,346.09162 L106.346674,1861.87754 C67.1107711,1817.02073 31.5882752,1768.83325 0.258819463,1717.79472 L797.749554,205.503306 L852.150452,102.341573 C869.987935,101.450737 887.94133,101 906,101 C923.83558,101 941.568469,101.439669 959.188422,102.30876 Z"
              id="Combined-Shape"
              fill={colorText}
            />
            <animated.path
              d="M1369.8792,1617.22625 C1251.98727,1737.7197 1087.56634,1812.49845 905.678089,1812.49845 C547.033608,1812.49845 256.293631,1521.75847 256.293631,1163.11399 C256.293631,804.46951 547.033608,513.729533 905.678089,513.729533 C1087.57107,513.729533 1251.99911,588.513019 1369.88867,709.011202 L1491.62252,587.457263 C1342.58816,435.778779 1135.11795,341.70763 905.678089,341.70763 C452.027428,341.70763 84.2717283,709.46333 84.2717283,1163.11399 C84.2717283,1616.76465 452.027428,1984.52035 905.678089,1984.52035 C1135.18187,1984.52035 1342.69941,1890.40186 1491.74087,1738.64289 L1369.8792,1617.22625 Z"
              id="Path"
              fill={colorPrimary}
              style={cAnimation}
            />
            <animated.circle
              id="Oval"
              stroke={colorText}
              strokeWidth="100"
              cx="905.5"
              cy="1162.5"
              r="404.5"
              style={oAnimation}
            />
            <animated.path
              d="M876.586207,1400 L876.586207,924 L931.045977,924 L931.045977,1400 L876.586207,1400 Z M857.643678,962.624677 C766.700598,984.020995 699,1065.69644 699,1163.18408 C699,1260.67172 766.700598,1342.34716 857.643678,1363.74348 L857.643678,1304.70291 C798.471954,1284.90509 755.827586,1229.02601 755.827586,1163.18408 C755.827586,1097.34215 798.471954,1041.46306 857.643678,1021.66525 L857.643678,962.624677 Z M1111,1163.18408 C1111,1261.51715 1042.1226,1343.75859 949.988506,1364.28579 L949.988506,1305.47256 C1010.38676,1286.38993 1054.17241,1229.89986 1054.17241,1163.18408 C1054.17241,1096.4683 1010.38676,1039.97823 949.988506,1020.8956 L949.988506,962.082368 C1042.1226,982.609572 1111,1064.851 1111,1163.18408 Z"
              id="Shape"
              fill={colorPrimary}
              style={ioAnimation}
            />
            <animated.polygon
              id="Path"
              fill={colorText}
              points="796.667759 205.503306 904.596294 0.835826516 1012.52483 205.503306 1254.12009 663.642111 1072.0543 663.642111 904.596294 346.09162 737.140653 663.642111 555.072501 663.642111"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default withTheme(AshCo);
