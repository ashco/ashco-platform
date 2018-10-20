export const theme = {
  // ------- COLOR -------
  colorPrimary: '#d27831',
  // colorPrimary: '#d34545',
  // colorPrimary: '#55c2ed',
  // colorPrimary: '#2de5b4',

  colorBackground: '#222',
  colorText: '#eee',

  // colorBackground: '#ddd',
  // colorText: '#444',

  // ------ ELEMENT STYLE VARIABLES -------
  portfolioRadius: '10px',
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
