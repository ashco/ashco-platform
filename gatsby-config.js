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
        logo: './src/images/favicon.png',
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
        short_name: `AshCo`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#1f1f1f`,
        display: `minimal-ui`,
        icon: `src/images/favicon-white.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
