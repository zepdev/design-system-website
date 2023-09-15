<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <img alt="Zeppelin" src="./src/assets/images/zep-logo-new.svg" width="200"/>
</p>
<h1 align="center">
  Zeppelin Design System (Legacy)
</h1>
<h2 align="center">⚠️ This Design System is deprecated and no longer maintained. npm packges will stay available, but please make sure to opt out until 2025 ⚠️<h2>

<span align="center">

[![CircleCI](https://circleci.com/gh/zepdev/design-system-website.svg?style=svg&circle-token=d4f1730edfe9173ba0e0fde81dc6a97c3ba467a9)](https://circleci.com/gh/zepdev/design-system-website)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=alert_status)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=bugs)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=code_smells)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=coverage)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=ncloc)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=security_rating)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=sqale_index)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=zepdev_design-system-website&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=zepdev_design-system-website)

</span>

This repository contains the website for Zeppelin's Design System.

## Quick start

This website was build using [Gatsby](https://www.gatsbyjs.org/).

1.  **Development**

    Navigate into your new site’s directory and start it up. In development, the site will run at `http://localhost:8000` and `http://localhost:8000/___graphql` (a tool to query [Gatsby's graphyQL](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

    ```sh
    yarn start
    ```

2.  **Testing**

    This website is tested with Jest, @testing-library/react, and Cypress

    ```sh
    yarn test
    yarn test:e2e
    ```

3.  **Start developing.**

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
        ├──assets
        ├──components
        ├──content
        ├──data
        ├──pages
        ├──styles
        ├──templates
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

    A. **`/assets`**: Contains images and fonts
    B. **`/components`**: Contains React components
    C. **`/content`**: Contains markdown files
    D. **`/data`**: Contains data structure and content used throughout site
    E. **`/pages`**: Structure for each page of the website (gatsby setup for routing)
    F. **`/styles`**: Contains all sass styles
    G. **`/templates`**: Structure for each sub-page of the website (gatsby setup for routing)

2.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

3.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

4.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

5.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

6.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

7.  **`LICENSE`**: Gatsby is licensed under the MIT license.

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## Package.json files

#### Markdown

gatsby-plugin-mdx (https://gatsby-plugin-mdx.netlify.com/)
@mdx-js/react
@mdx-js/mdx

#### Styles

clsx
react-jss
gatsby-plugin-jss

#### SEO / PWA

react-helmet
gatsby-plugin-offline
gatsby-plugin-manifest

#### images

gatsby-image
gatsby-plugin-sharp
gatsby-remark-images

#### e2e tests with Cypress

cypress
eslint-plugin-cypress
start-server-and-test (starts cypress)

#### units test with @testing-library/react and jest

@testing-library/react
jest
jest-dom
jest-axe (tests accessibility)
identity-obj-proxy (passes css in jest)
react-test-renderer (jest snapshots)
global (recommended from gatsby for loadershim.js)
jss-snapshot-serializer (for react-jss)
