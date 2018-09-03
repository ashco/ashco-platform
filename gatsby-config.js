module.exports = {
  siteMetadata: {
    title: 'AshCo.io',
    description: 'Welcome to Ashland',
  },
  pathPrefix: '/gatsby-levelup',
  plugins: [
    'gatsby-plugin-react-helmet',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      // Make images available to graphql
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'aa07zaigeqjr',
        accessToken: '2c1ca8f493ba284be189fbb6b86532a21e08d5eaf5bafb5ef03a33fddb7a117a',
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
  ],
}
