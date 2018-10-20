import React from 'react';
import { withTheme } from 'styled-components';

const AshCo = ({ theme }) => {
  const { colorPrimary, colorText } = theme;
  // const colorPrimary = '#55c2ed80';
  // const colorText = '#eeeeee80';
  return (
    <svg width="832" height="838" viewBox="0 0 832 838" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M416 0L370.406 86.4606L0.456787 788H77.3705L416 145.852L754.63 788H831.543L461.594 86.4606L416 0Z" fill={colorText}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M612.1 682.838C562.297 733.74 492.838 765.33 416 765.33C264.492 765.33 141.67 642.508 141.67 491C141.67 339.492 264.492 216.67 416 216.67C492.84 216.67 562.302 248.262 612.104 299.166L663.529 247.816C600.571 183.74 512.926 144 416 144C224.357 144 69 299.357 69 491C69 682.643 224.357 838 416 838C512.953 838 600.618 798.238 663.58 734.132L612.1 682.838Z" fill={colorPrimary}/>
        <circle cx="416" cy="491" r="171" stroke={colorText} stroke-width="44"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M404 591V390H427V591H404ZM396 406.31C357.592 415.345 329 449.834 329 491C329 532.166 357.592 566.655 396 575.69V550.759C371.01 542.399 353 518.803 353 491C353 463.197 371.01 439.601 396 431.241V406.31ZM503 491C503 532.523 473.911 567.251 435 575.919V551.084C460.508 543.026 479 519.172 479 491C479 462.828 460.508 438.974 435 430.916V406.081C473.911 414.749 503 449.477 503 491Z" fill={colorPrimary}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M369.949 86.4606L415.543 0L461.137 86.4606L563.198 280H486.285L415.543 145.852L344.802 280H267.888L369.949 86.4606Z" fill={colorText}/>
      </g>
      <defs>
        <filter id="filter0_f" x="-164" y="-109" width="1156" height="1002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>
      </filter>
    </defs>
  </svg>




  );
};

export default withTheme(AshCo);
