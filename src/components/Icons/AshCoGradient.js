import React from 'react';
import { withTheme } from 'styled-components';

const AshCo = ({ theme }) => {
  const { colorPrimary, colorLighter, colorDarker, colorText } = theme;
  // const colorPrimary = '#55c2ed80';
  // const colorText = '#eeeeee80';
  return (
    <svg
      width="832px"
      height="838px"
      viewBox="0 0 832 838"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="112.114329%"
          y1="49.4944574%"
          x2="0%"
          y2="49.4944574%"
          id="linearGradient-1"
        >
          <stop stop-color={colorLighter} offset="0%" />
          <stop stop-color={colorPrimary} offset="47.9771699%" />
          <stop stop-color={colorDarker} offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Page-3"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Artboard" transform="translate(-69.000000, -9.000000)">
          <g id="ashco-logo" transform="translate(69.000000, 9.000000)">
            <polygon
              id="Path"
              fill="#DDDDDD"
              points="416 0 370.406 86.461 0.457 788 77.371 788 416 145.852 754.63 788 831.54 788 461.594 86.461"
            />
            <path
              d="M612.1,682.838 C562.297,733.74 492.838,765.33 416,765.33 C264.492,765.33 141.67,642.508 141.67,491 C141.67,339.492 264.492,216.67 416,216.67 C492.84,216.67 562.302,248.262 612.104,299.166 L663.53,247.816 C600.571,183.74 512.926,144 416,144 C224.357,144 69,299.357 69,491 C69,682.643 224.357,838 416,838 C512.953,838 600.618,798.24 663.58,734.13 L612.1,682.838 Z"
              id="Path"
              fill="url(#linearGradient-1)"
            />
            <circle
              id="Oval"
              stroke="#DDDDDD"
              stroke-width="44"
              cx="416"
              cy="491"
              r="171"
            />
            <path
              d="M404,591 L404,390 L427,390 L427,591 L404,591 Z M396,406.31 C357.592,415.345 329,449.834 329,491 C329,532.166 357.592,566.655 396,575.69 L396,550.759 C371.01,542.399 353,518.803 353,491 C353,463.197 371.01,439.601 396,431.241 L396,406.31 Z M503,491 C503,532.523 473.911,567.251 435,575.919 L435,551.084 C460.508,543.026 479,519.172 479,491 C479,462.828 460.508,438.974 435,430.916 L435,406.081 C473.911,414.749 503,449.477 503,491 Z"
              id="Shape"
              fill={colorPrimary}
            />
            <polygon
              id="Path"
              fill="#DDDDDD"
              points="369.949 86.461 415.543 0 461.137 86.461 563.198 280 486.285 280 415.543 145.852 344.802 280 267.888 280"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default withTheme(AshCo);
