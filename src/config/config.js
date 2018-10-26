const themeDefault = {
  colorLighter: '#E3854A',
  colorPrimary: '#DD702B',
  colorDarker: '#D65E12',
  colorBackground: '#1f1f1f',
  colorText: '#dfdfdf',
};

export const themeArr = [
  {
    // ORANGE
    colorLighter: '#E3854A',
    colorPrimary: '#DD702B',
    colorDarker: '#D65E12',
    colorBackground: '#1f1f1f',
    colorText: '#dfdfdf',
  },
  {
    // RED
    colorLighter: '#FF755D',
    colorPrimary: '#FF5D5B',
    colorDarker: '#FF5C71',
    colorBackground: '#1f1f1f',
    colorText: '#dfdfdf',
  },
  {
    // BLUE
    colorLighter: '#4AC7D9',
    colorPrimary: '#4BB9DA',
    colorDarker: '#4AA9D9',
    colorBackground: '#1f1f1f',
    colorText: '#dfdfdf',
  },
  {
    // GREEN
    colorLighter: '#3BF2D7',
    colorPrimary: '#2de5b4',
    colorDarker: '#21C9A4',
    colorBackground: '#1f1f1f',
    colorText: '#dfdfdf',
  },
  {
    // PURPLE
    colorLighter: '#C87DEF',
    colorPrimary: '#C664EC',
    colorDarker: '#AE47D6',
    colorBackground: '#1f1f1f',
    colorText: '#dfdfdf',
  },
];

let localStorageThemeObj = JSON.parse(localStorage.getItem('themeObj'));

console.log({ localStorageThemeObj });

export const theme = localStorageThemeObj ? localStorageThemeObj : themeDefault;

console.log({ theme });

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
