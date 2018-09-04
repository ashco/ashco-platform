// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// PORTFOLIO
exports.createPortfolio = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  // create promise to get slugs
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
      }
    `).then(result => {
      // create new page for each slug found
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
    });
    resolve();
  });
};

// BLOG
exports.createBlogPosts = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
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
