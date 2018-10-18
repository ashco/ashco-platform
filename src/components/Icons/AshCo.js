import React from 'react';
import { withTheme } from 'styled-components';

const AshCo = ({ theme }) => {
  const { colorPrimary, colorText } = theme;
  // const colorPrimary = '#55c2ed80';
  // const colorText = '#eeeeee80';
  return (
    <svg
      width="1164"
      height="1010"
      viewBox="0 0 1164 1010"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_df)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M580 154L546.084 218.315L182.914 907H250.745L580 282.63L909.255 907H977.086L613.916 218.315L580 154Z"
          fill={colorText}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M764.994 780.773C717.906 829.026 652.122 859 579.3 859C436.031 859 320 742.98 320 600C320 457.02 436.031 341 579.3 341C652.13 341 717.922 370.981 765.01 419.244L815.961 368.366C755.828 307.047 672.011 269 579.3 269C396.328 269 248 417.194 248 600C248 782.806 396.328 931 579.3 931C672.031 931 755.864 892.936 816 831.594L764.994 780.773Z"
          fill={colorPrimary}
        />
        <path
          d="M745.5 600C745.5 691.403 671.403 765.5 580 765.5C488.597 765.5 414.5 691.403 414.5 600C414.5 508.597 488.597 434.5 580 434.5C671.403 434.5 745.5 508.597 745.5 600Z"
          stroke={colorText}
          strokeWidth="44"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M568 717.5H591V482.5H568V717.5ZM560 515.31C521.591 524.345 493 558.834 493 600C493 641.166 521.591 675.655 560 684.69V659.759C535.01 651.399 517 627.803 517 600C517 572.197 535.01 548.601 560 540.241V515.31ZM599 539.916V515.081C637.911 523.749 667 558.477 667 600C667 641.523 637.911 676.251 599 684.919V660.084C624.508 652.026 643 628.172 643 600C643 571.828 624.508 547.974 599 539.916Z"
          fill={colorPrimary}
        />
      </g>
      <defs>
        <filter
          id="filter0_df"
          x="0"
          y="0"
          width="1164"
          height="1010"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feGaussianBlur stdDeviation="0.5" result="effect2_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default withTheme(AshCo);
