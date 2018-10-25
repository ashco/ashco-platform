export const theme = {
  // ------- COLOR -------
  // colorPrimary: '#d27831',
  // colorPrimary: '#d35151',
  // colorPrimary: '#49afd7',
  // colorPrimary: '#2de5b4',
  // colorPrimary: '#9974dd',

  // ORANGE
  // colorPrimary: '#D27831',
  // colorSecondary: '#E39B2F',
  // ORANGE
  // colorLighter: '#E39B2F',
  colorLighter: '#E5A830',
  colorPrimary: '#D27831',
  colorDarker: '#FF685C',
  // RED
  // colorPrimary: '#FF5D5B',
  // colorSecondary: '#FF685C',
  // BLUE
  // colorPrimary: '#4AA9D9',
  // colorSecondary: '#4AC7D9',



  colorBackground: '#1f1f1f',
  colorText: '#dfdfdf',

  // colorBackground: '#eee',
  // colorText: '#383838',

  // ------ ELEMENT STYLE VARIABLES -------
  portfolioRadius: '5px',
  borderGradient: 'linear-gradient(135deg, ${props => props.theme.colorPrimary}aa 0%,${props => props.theme.colorSecondary}aa 100%)',
};

export const globalVars = {};

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
