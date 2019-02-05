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
  if (node.internal.type === 'Mdx') {
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
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.error(result.errors)
      reject(result.errors)
    }
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          //slug: node.fields.slug,
          context: { id: node.id },
        },
      })
    })
  })
}

/**
 * Modernizr feature detects for older browsers
 */
exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  var ModernizrWebpackPlugin = require('modernizr-webpack-plugin')

  var config = {
    options: ['setClasses'],
    //minify: true,

    //help: https://github.com/Modernizr/Modernizr/tree/master/feature-detects
    'feature-detects': ['input', 'canvas', 'css/resize', 'css/wrapflow'],
  }

  actions.setWebpackConfig({
    plugins: [new ModernizrWebpackPlugin(config)],
  })
}
