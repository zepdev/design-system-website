/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


/**
 * Modernizr feature detects for older browsers
 */
exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
    var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

    var config = {
        'options':[
            'setClasses'
        ],
        //minify: true,
        'feature-detects': [
          'input',
          'canvas',
          'css/resize',
          'css/wrapflow'
        ]
      }
       

    actions.setWebpackConfig({
        plugins:[
            new ModernizrWebpackPlugin(config)
        ]
    })
}
