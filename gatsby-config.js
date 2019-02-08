let sass = require('node-sass')
let sassUtils = require('node-sass-utils')(sass)
const sassVars = require(`$ {__dirname}$ {'/src/data/theme.js'}`)

module.exports = {
  siteMetadata: {
    title: `Zeppelin Design System`,
    description: `Design System Website`,
    author: `@zeppelin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${ __dirname }/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeppelin-design-system`,
        short_name: `z-lab`,
        start_url: `/`,
        background_color: sassVars.colors.white,
        theme_color: sassVars.colors.purple,
        display: `minimal-ui`,
        icon: `src/assets/images/zeppelin_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        functions: {
          'get($keys)': function(keys) {
            keys = keys.getValue().split('.')
            let result = sassVars
            let i
            for (i = 0; i < keys.length; i++) {
              result = result[keys[i]]
            }
            result = sassUtils.castToSass(result)
            return result
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
