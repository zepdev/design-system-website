/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/**
 * create pages out of markdown files
 *
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}

/**
 * Modernizr feature detects for older browsers
 */
exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  let ModernizrWebpackPlugin = require('modernizr-webpack-plugin')

  let config = {
    options: ['setClasses'],
    // minify: true,

    // help: https://github.com/Modernizr/Modernizr/tree/master/feature-detects
    'feature-detects': ['input', 'canvas', 'css/resize', 'css/wrapflow'],
  }

  actions.setWebpackConfig({
    plugins: [new ModernizrWebpackPlugin(config)],
  })
}
