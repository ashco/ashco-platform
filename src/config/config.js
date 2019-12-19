// Determine if Dark Mode
let darkMode = false;
if (typeof window !== `undefined`) {
  darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

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
  },
  {
    // RED LIGHT
    title: 'Red',
    colorPrimary: '#FF5D5B',
  },
  {
    // PURPLE LIGHT
    title: 'Purple',
    colorPrimary: '#e773f4',
  },
  {
    // BLUE LIGHT
    title: 'Blue',
    colorPrimary: '#4BB9DA',
  },
  {
    // GREEN LIGHT
    title: 'Green',
    colorPrimary: '#21C9A4',
  },
];
