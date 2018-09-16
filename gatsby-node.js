// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// BLOG
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPortfolioProject {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      // SITE REDIRECTS
      createRedirect({
        fromPath: 'https://ashco-io.netlify.com/*',
        toPath: 'https://www.ashco.io/:splat',
        isPermanent: true,
      });
      // PORTFOLIO
      result.data.allContentfulPortfolioProject.edges.forEach(({ node }) => {
        createPage({
          // can use this fnc to create pages outside of promises
          path: `portfolio/${node.slug}`,
          component: path.resolve(
            './src/components/Portfolio/PortfolioPage.js'
          ),
          context: {
            // variable you assign to graphql to pass
            slug: node.slug,
          },
        });
      });
      // BLOG
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.slug}`,
          component: path.resolve('./src/components/Blog/BlogPage.js'),
          context: {
            slug: node.slug,
          },
        });
      });
    });
    resolve();
  });
};
