// export const theme = {
//   // ------- COLOR -------
//   // ORANGE
//   colorLighter: '#E3854A',
//   colorPrimary: '#DD702B',
//   colorDarker: '#D65E12',
//   // RED
//   // colorLighter: '#FF755D',
//   // colorPrimary: '#FF5D5B',
//   // colorDarker: '#FF5C71',
//   // BLUE
//   // colorLighter: '#4AC7D9',
//   // colorPrimary: '#4BB9DA',
//   // colorDarker: '#4AA9D9',
//   // GREEN
//   // colorLighter: '#3BF2D7',
//   // colorPrimary: '#2de5b4',
//   // colorDarker: '#21C9A4',
//   // PURPLE
//   // colorLighter: '#C87DEF',
//   // colorPrimary: '#C664EC',
//   // colorDarker: '#AE47D6',
//   // AMERICA MODE
//   // colorLighter: '#4BB9DA',
//   // colorPrimary: '#eeeeee',
//   // colorDarker: '#FF5C71',

//   colorBackground: '#1f1f1f',
//   colorText: '#dfdfdf',

//   // colorBackground: '#eee',
//   // colorText: '#383838',

//   // ------ ELEMENT STYLE VARIABLES -------
//   portfolioRadius: '5px',
//   borderGradient:
//     'linear-gradient(135deg, ${props => props.theme.colorPrimary}aa 0%,${props => props.theme.colorSecondary}aa 100%)',
// };

export const sizes = {
  tablet: 769,
  laptop: 1200,
  desktop: 1450,
  hd: 2400,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = style => `
    @media (min-width: ${sizes[key] / 16}em) {
      ${style};
    }
  `;
  return acc;
}, {});
