import React from 'react';
import { withTheme } from 'styled-components';

const Desktop = ({ theme }) => {
  const { colorText } = theme;
  return (
    <svg
      aria-hidden="true"
      data-icon="desktop"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width="50"
      height="50"
    >
      <path
        fill={colorText}
        d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
      />
    </svg>
  );
};

export default withTheme(Desktop);
