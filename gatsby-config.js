module.exports = {
  siteMetadata: {
    title: 'AshCo.io',
    siteUrl: `https://www.ashco.io`,
    description: 'Welcome to Ashland',
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-slug',
    'gatsby-plugin-styled-components',
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
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: 'example.com',
      },
    },
    'gatsby-transformer-remark', // transforms md files into html? I think?
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     excerpt_separator: `<!-- end -->`, // provides way to manually set excerpt range
    //   },
    // },
    'gatsby-transformer-sharp', // allows images
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
  ],
};
