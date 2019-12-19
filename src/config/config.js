// Determine if Dark Mode
let darkMode = false;
if (typeof window !== `undefined`) {
  darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

console.log(darkMode);

export const themeDefault = {
  colorPrimary: '#DD702B',
  colorBackground: darkMode ? '#1f1f1f' : '#ffffff',
  colorText: darkMode ? '#dfdfdf' : '#222222',
};

export const themeArr_invert = [
  {
    title: 'Dark Mode',
    colorBackground: '#1f1f1f',
    colorText: '#dfdfdf'
  },
  {
    title: 'Light Mode',
    colorBackground: '#ffffff',
    colorText: '#222222'
  },
]

export const themeArr_color = [
  {
    // ORANGE LIGHT
    title: 'Orange',
    colorPrimary: '#DD702B',
    // colorBackground: '#ffffff',
    // colorText: '#222222',
  },
  // {
  //   // ORANGE DARK
  //   title: 'Orange',
  //   colorPrimary: '#DD702B',
  //   // // colorBackground: '#1f1f1f',
  //   // colorText: '#dfdfdf',
  // },
  {
    // RED LIGHT
    title: 'Red',
    colorPrimary: '#FF5D5B',
    // colorBackground: '#ffffff',
    // colorText: '#222222',
  },
  // {
  //   // RED DARK
  //   title: 'Red',
  //   colorPrimary: '#FF5D5B',
  //   // colorBackground: '#1f1f1f',
  //   // colorText: '#dfdfdf',
  // },
  {
    // PURPLE LIGHT
    title: 'Purple',
    colorPrimary: '#e773f4',
    // colorBackground: '#ffffff',
    // colorText: '#222222',
  },
  // {
  //   // PURPLE DARK
  //   title: 'Purple',
  //   colorPrimary: '#e773f4',
  //   // colorBackground: '#1f1f1f',
  //   // colorText: '#dfdfdf',
  // },
  {
    // BLUE LIGHT
    title: 'Blue',
    colorPrimary: '#4BB9DA',
    // colorBackground: '#ffffff',
    // colorText: '#222222',
  },
  // {
  //   // BLUE DARK
  //   title: 'Blue',
  //   colorPrimary: '#4BB9DA',
  //   // colorBackground: '#1f1f1f',
  //   // colorText: '#dfdfdf',
  // },
  {
    // GREEN LIGHT
    title: 'Green',
    colorPrimary: '#21C9A4',
    // colorBackground: '#ffffff',
    // colorText: '#222222',
  },
  // {
  //   // GREEN DARK
  //   title: 'Green',
  //   colorPrimary: '#21C9A4',
  //   // colorBackground: '#1f1f1f',
  //   // colorText: '#dfdfdf',
  // },
];
