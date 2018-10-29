import React from 'react';
import { withTheme } from 'styled-components';

const MailSent = ({ theme }) => {
  const { colorText } = theme;
  return (
    <svg
      width="250px"
      height="250px"
      viewBox="0 0 64 52"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="noun_Mail_1913611"
          transform="translate(2.000000, 2.000000)"
          fill={colorText}
        >
          <path
            d="M59,0 L1,0 C0.44771525,0 0,0.44771525 0,1 L0,37 C0,37.5522847 0.44771525,38 1,38 L5,38 L5,36 L2,36 L2,7.593 L22,17.249 L22,17.828 C22.0027816,20.7683368 23.4227175,23.5270482 25.814,25.238 L29.419,27.813 C29.7665951,28.0611286 30.2334049,28.0611286 30.581,27.813 L34.181,25.238 C36.5741746,23.5281333 37.9960639,20.7692435 38,17.828 L38,17.249 L58,7.593 L58,36 L55,36 L55,38 L59,38 C59.5522847,38 60,37.5522847 60,37 L60,1 C60,0.44771525 59.5522847,0 59,0 Z M36,17.828 C35.9974804,20.1225132 34.8896448,22.275273 33.024,23.611 L30,25.771 L26.976,23.611 C25.1103552,22.275273 24.0025196,20.1225132 24,17.828 L24,12.954 C26.2215116,12.7506474 28.3217314,11.8496531 30,10.38 C31.6782686,11.8496531 33.7784884,12.7506474 36,12.954 L36,17.828 Z M58,5.372 L38,15.028 L38,12 C38,11.4477153 37.5522847,11 37,11 C34.7031446,11.0066143 32.4990815,10.094166 30.879,8.466 L30.708,8.294 C30.3112365,7.91710952 29.6887635,7.91710952 29.292,8.294 L29.122,8.465 C27.5018394,10.0937797 25.2973462,11.006617 23,11 C22.4477153,11 22,11.4477153 22,12 L22,15.028 L2,5.372 L2,2 L58,2 L58,5.372 Z"
            id="Shape"
            fillRule="nonzero"
          />
          <path
            d="M28.3350418,17.1027596 L27,18.5894106 L28.8883194,20.6921702 C29.2570136,21.1026099 29.854667,21.1026099 30.2233612,20.6921702 L34,16.486651 L32.6649582,15 L29.5558403,18.4621937 L28.3350418,17.1027596 Z"
            id="Path"
          />
          <rect id="Rectangle" x="7" y="33" width="2" height="9" />
          <rect id="Rectangle" x="7" y="44" width="2" height="3" />
          <rect id="Rectangle" x="11" y="34" width="2" height="10" />
          <rect id="Rectangle" x="15" y="32" width="2" height="10" />
          <rect id="Rectangle" x="15" y="44" width="2" height="2" />
          <rect id="Rectangle" x="19" y="40" width="2" height="2" />
          <rect id="Rectangle" x="19" y="44" width="2" height="4" />
          <rect id="Rectangle" x="23" y="34" width="2" height="8" />
          <rect id="Rectangle" x="23" y="44" width="2" height="2" />
          <rect id="Rectangle" x="27" y="40" width="2" height="4" />
          <rect id="Rectangle" x="27" y="46" width="2" height="2" />
          <rect id="Rectangle" x="31" y="32" width="2" height="10" />
          <rect id="Rectangle" x="31" y="44" width="2" height="2" />
          <rect id="Rectangle" x="35" y="40" width="2" height="4" />
          <rect id="Rectangle" x="35" y="46" width="2" height="2" />
          <rect id="Rectangle" x="39" y="34" width="2" height="12" />
          <rect id="Rectangle" x="43" y="32" width="2" height="8" />
          <rect id="Rectangle" x="43" y="42" width="2" height="2" />
          <rect id="Rectangle" x="47" y="37" width="2" height="5" />
          <rect id="Rectangle" x="47" y="44" width="2" height="2" />
          <rect id="Rectangle" x="51" y="34" width="2" height="8" />
          <rect id="Rectangle" x="51" y="44" width="2" height="4" />
        </g>
      </g>
    </svg>
  );
};

export default withTheme(MailSent);
