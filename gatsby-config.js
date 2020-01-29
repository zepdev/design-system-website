const theme = require('zeppelin-element-library/guidelines.json')

module.exports = {
  siteMetadata: {
    title: `Zeppelin Design System`,
    description: `Design System Website`,
    author: `@zeppelin`,
    url: 'https://live-zds.zepdev.net',
    image: '/src/assets/images/favicon.svg',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeppelin-design-system`,
        short_name: `z-lab`,
        start_url: `/`,
        background_color: theme.color.gray.white.hex,
        theme_color: theme.theme.indigo.primary,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
}
