const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://design-system-website.test/`);
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
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeppelin-design-system`,
        short_name: `z-lab`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#27166f`,
        display: `minimal-ui`,
        icon: `src/images/zeppelin_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
          region: process.env.AWS_REGION,
          protocol: targetAddress.protocol.slice(0, -1),
          hostname: targetAddress.hostname,
          acl: null,
          params: {
              // In case you want to add any custom content types: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/custom-content-type.md
          },
      },
  }
  ],
}
