// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// BLOG
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPortfolioPost {
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
      // PORTFOLIO
      result.data.allContentfulPortfolioPost.edges.forEach(({ node }) => {
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
