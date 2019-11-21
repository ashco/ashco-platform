// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');

// BLOG
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // SITE REDIRECTS
  createRedirect({
    fromPath: 'https://akc-dev.netlify.com',
    toPath: 'https://www.akc.dev',
    isPermanent: true,
  });

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
      if (result.errors) {
        reject(result.errors);
      }
      // PORTFOLIO
      result.data.allContentfulPortfolioProject.edges.forEach(({ node }) => {
        createPage({
          // can use this fnc to create pages outside of promises
          path: `projects/${node.slug}`,
          component: path.resolve(
            './src/components/Portfolio/PortfolioPageSelected.js'
          ),
          context: {
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
