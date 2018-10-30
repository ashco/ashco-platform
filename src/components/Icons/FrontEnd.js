import React from 'react';
import { withTheme } from 'styled-components';

const FrontEnd = ({ theme }) => {
  const { colorPrimary } = theme;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      baseProfile="tiny"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      width="250"
      height="250"
    >
      <g>
        <path
          fill={colorPrimary}
          d="M85,7.5H15c-4.142,0-7.5,3.358-7.5,7.5v70c0,4.142,3.358,7.5,7.5,7.5h70c4.142,0,7.5-3.358,7.5-7.5V15   C92.5,10.858,89.142,7.5,85,7.5z M85,85H15V35h70V85z M85,30H15V15h70V30z"
        />
        <rect x="55" y="20" fill={colorPrimary} width="5" height="5" />
        <rect x="65" y="20" fill={colorPrimary} width="5" height="5" />
        <rect x="75" y="20" fill={colorPrimary} width="5" height="5" />
        <polygon
          fill={colorPrimary}
          points="66.768,71.768 78.535,60 66.768,48.232 63.232,51.768 71.465,60 63.232,68.232  "
        />
        <rect
          x="47.5"
          y="39.384"
          transform="matrix(0.9701 0.2425 -0.2425 0.9701 16.045 -10.3353)"
          fill={colorPrimary}
          width="5.001"
          height="41.231"
        />
        <polygon
          fill={colorPrimary}
          points="36.768,68.232 28.535,60 36.768,51.768 33.232,48.232 21.465,60 33.232,71.768  "
        />
      </g>
    </svg>
  );
};

export default withTheme(FrontEnd);
