module.exports = {
  siteMetadata: {
    title: 'AshCo.io',
    siteUrl: 'https://www.ashco.io',
    description: 'Welcome to Ashland',
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-slug',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/favicon-white.png',
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#1F1F1F',
        theme_color: '#DF7313',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      // Make files available to graphql
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      // Make images available to graphql
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      // Make images available to graphql
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'gj983m0eob2f',
        accessToken:
          'ec023f38a42bc2a262ae4613e04db22b95271efd9732b2e7a5cd95cc270b695f',
      },
    },
    {
      // Include Google Analytics
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-126985313-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    'gatsby-transformer-remark', // transforms md files into html? I think?
    'gatsby-transformer-sharp', // allows images
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AshCo.io`,
        short_name: `AshCo.io`,
        start_url: `/`,
        // This code doesn't do anything!
        background_color: `#1F1F1F`,
        theme_color: `#DF7313`,
        display: `minimal-ui`,
        icon: `src/images/favicon-white.png`, // This path is relative to the root of the site.
        include_favicon: true, // Includes favicon
      },
    },
    'gatsby-plugin-offline',
  ],
};
