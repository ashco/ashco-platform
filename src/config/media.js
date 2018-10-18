// import styled from 'styled-components';

const sizes = {
  // phone: 576,
  tablet: 768,
  laptop: 1050,
  desktop: 1450,
  hd: 2400,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = style => `
    @media (min-width: ${sizes[key] / 16}em) {
      ${style};
    }
  `;

  return acc;
}, {});

export default media;

// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;

//   /* Now we have our methods on media and can use them instead of raw queries */
//   ${media.desktop`background: dodgerblue;`}
//   ${media.tablet`background: mediumseagreen;`}
//   ${media.phone`background: palevioletred;`}
// `;
// a
// render(
//   <Content />
// );
