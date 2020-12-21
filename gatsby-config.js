require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Zeppelin Design System`,
    description: `Design System Website`,
    author: `@zeppelin`,
    url: "https://live-zds.zepdev.net",
    image: "/src/assets/images/zeppelin_icon.png",
  },
  plugins: [
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "GTM-P45R8R7", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default,
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-P45R8R7',

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     // Defaults to null
    //     defaultDataLayer: { platform: 'gatsby' },

    //     // // Specify optional GTM environment details.
    //     // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
    //     // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
    //     // dataLayerName: 'YOUR_DATA_LAYER_NAME',
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-109527063-4',
    //     anonymize: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeppelin-design-system`,
        short_name: `z-lab`,
        start_url: `/`,
        background_color: "#fff",
        theme_color: "#27166F",
        display: `minimal-ui`,
        icon: `src/assets/images/zeppelin_icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-theme-material-ui",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
