//const theme = require('zeppelin-element-library/bundle/themes/theme.json')
const theme = {
  breakpoints: {
    xs: '36em',
    s: '48em',
    m: '62em',
    l: '75em',
    xl: '105em',
    xxl: '120em',
  },
  grid: {
    xxs: {
      screensize: "'<576px'",
      columns: 4,
      margin: '24px',
      gutter: '24px',
    },
    xs: {
      screensize: "'≥576px'",
      columns: 6,
      margin: '32px',
      gutter: '32px',
    },
    s: {
      screensize: "'≥768px'",
      columns: 6,
      margin: '48px',
      gutter: '32px',
    },
    m: {
      screensize: "'≥992px'",
      columns: 8,
      margin: '64px',
      gutter: '32px',
    },
    l: {
      screensize: "'≥1200px'",
      columns: 12,
      margin: '64px',
      gutter: '32px',
    },
    xl: {
      screensize: "'≥1680px'",
      columns: 12,
      margin: 'auto',
      gutter: '32px',
    },
  },
  typography: {
    typefaces: {
      roboto: "'Roboto, sans-serif'",
      robotoCondensed: "'Roboto Condensed, sans-serif'",
    },
    basics: {
      fontSizeBase: {
        specification: 'font-size-base',
        value: '16px',
      },
      fontColor: {
        specification: 'font-size-base',
        value: 'rgba(0,0,0,.72)',
      },
      fontColorNegative: {
        specification: 'font-size-base',
        value: 'rgba(255,255,255,.84)',
      },
      lineHeightBase: {
        specification: 'line-height-base',
        value: '28px',
      },
      fontWeightBase: {
        specification: 'font-weight-base',
        value: 400,
      },
      fontSizeXs: {
        specification: 'font-size-xs',
        value: '12px',
      },
      fontSizeSm: {
        specification: 'font-size-sm',
        value: '14px',
      },
      fontSizeLg: {
        specification: 'font-size-lg',
        value: '20px',
      },
    },
    headings: {
      normal: {
        'zep-typo--normal-h1': {
          rem: '2.5rem',
          px: '40px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '300 (light)',
            'line-height': '60px',
            'text-transform': 'none',
            'letter-spacing': '0.4px',
          },
        },
        'zep-typo--normal-h2': {
          rem: '2.25rem',
          px: '36px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '300 (light)',
            'line-height': '52px',
            'text-transform': 'none',
            'letter-spacing': '0.4px',
          },
        },
        'zep-typo--normal-h3': {
          rem: '1.75rem',
          px: '28px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '300 (light)',
            'line-height': '40px',
            'text-transform': 'none',
            'letter-spacing': '0.4px',
          },
        },
        'zep-typo--normal-h4': {
          rem: '1.5rem',
          px: '24px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '400 (regular)',
            'line-height': '36px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--normal-h5': {
          rem: '1.25rem',
          px: '20px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '400 (regular)',
            'line-height': '32px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--normal-h6': {
          rem: '1.125rem',
          px: '18px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '400 (regular)',
            'line-height': '18px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--normal-body1': {
          rem: '1rem',
          px: '16px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '400 (regular)',
            'line-height': '28px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--normal-body2': {
          rem: '0.875rem',
          px: '14px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '400 (regular)',
            'line-height': '24px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--normal-caption': {
          rem: '0.75rem',
          px: '12px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '400 (regular)',
            'line-height': '20px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--normal-button1': {
          rem: '1rem',
          px: '16px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '20px',
            'text-transform': 'uppercase',
            'letter-spacing': '0.4px',
          },
        },
        'zep-typo--normal-button2': {
          rem: '1rem',
          px: '16px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '20px',
            'text-transform': 'none',
            'letter-spacing': '0.75px',
          },
        },
      },
      bold: {
        'zep-typo--bold-h1': {
          rem: '2.5rem',
          px: '40px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '500 (medium)',
            'line-height': '60px',
            'text-transform': 'none',
            'letter-spacing': '0.5px',
          },
        },
        'zep-typo--bold-h2': {
          rem: '2.25rem',
          px: '36px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '500 (medium)',
            'line-height': '52px',
            'text-transform': 'none',
            'letter-spacing': '0.4px',
          },
        },
        'zep-typo--bold-h3': {
          rem: '1.75rem',
          px: '28px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '500 (medium)',
            'line-height': '40px',
            'text-transform': 'none',
            'letter-spacing': '0.4px',
          },
        },
        'zep-typo--bold-h4': {
          rem: '1.5rem',
          px: '24px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '36px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--bold-h5': {
          rem: '1.25rem',
          px: '20px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '32px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--bold-h6': {
          rem: '1.125rem',
          px: '18px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '18px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--bold-body1': {
          rem: '1rem',
          px: '16px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '28px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--bold-body2': {
          rem: '0.875rem',
          px: '14px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '24px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
        'zep-typo--bold-caption': {
          rem: '0.75rem',
          px: '12px',
          specifications: {
            'font-family': "'Roboto, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '20px',
            'text-transform': 'none',
            'letter-spacing': '0px',
          },
        },
      },
      display: {
        'zep-typo--display-1': {
          rem: '5rem',
          px: '80px',
          weight: 400,
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '88px',
            'text-transform': 'uppercase',
            'letter-spacing': '0.6',
          },
        },
        'zep-typo--display-2': {
          rem: '4rem',
          px: '64px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '72px',
            'text-transform': 'uppercase',
            'letter-spacing': '0.6',
          },
        },
        'zep-typo--display-3': {
          rem: '3rem',
          px: '48px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '56px',
            'text-transform': 'uppercase',
            'letter-spacing': '0.6',
          },
        },
        'zep-typo--display-4': {
          rem: '2.25rem',
          px: '36px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '44px',
            'text-transform': 'uppercase',
            'letter-spacing': '0.6',
          },
        },
        'zep-typo--display-5': {
          rem: '1.5rem',
          px: '24px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '32px',
            'text-transform': 'uppercase',
            'letter-spacing': '1',
          },
        },
        'zep-typo--display-6': {
          rem: '0.875rem',
          px: '14px',
          specifications: {
            'font-family': "'Roboto Condensed, sans-serif'",
            'font-weight': '700 (bold)',
            'line-height': '20px',
            'text-transform': 'uppercase',
            'letter-spacing': '1',
          },
        },
      },
    },
  },
  colors: {
    zLab: {
      cyan: {
        name: 'cyan',
        type: 'primary',
        hex: '#00aeef',
        rgb: 'rgb(0,174,239)',
      },
      gray: {
        name: 'gray',
        type: 'secondary',
        hex: '#575757',
        rgb: 'rgb(87,87,87)',
      },
    },
    corporate: {
      indigoBlue: {
        name: 'indigo-blue',
        type: 'primary',
        hex: '#27166f',
        rgb: 'rgb(39,22,111)',
      },
      sand: {
        name: 'sand',
        type: 'primary',
        hex: '#e9cea4',
        rgb: 'rgb(234,206,164)',
      },
      steel: {
        name: 'steel',
        type: 'primary',
        hex: '#4e8095',
        rgb: 'rgb(79,128,150)',
      },
      indigoBlueLighter: {
        name: 'indigo-blue-lighter',
        type: 'secondary',
        hex: '#361e9a',
        rgb: 'rgb(54,30,154)',
      },
      yellow: {
        name: 'yellow',
        type: 'secondary',
        hex: '#FFE72D',
        rgb: 'rgb(255,231,45)',
      },
      orange: {
        name: 'orange',
        type: 'secondary',
        hex: '#FBBA00',
        rgb: 'rgb(251,186,0)',
      },
      red: {
        name: 'red',
        type: 'secondary',
        hex: '#DD686A',
        rgb: 'rgb(221,104,106)',
      },
      greenLight: {
        name: 'green-light',
        type: 'secondary',
        hex: '#94C11C',
        rgb: 'rgb(148,193,28)',
      },
      greenDark: {
        name: 'green-dark',
        type: 'secondary',
        hex: '#00A760',
        rgb: 'rgb(0,167,96)',
      },
      gray: {
        name: 'gray',
        type: 'secondary',
        hex: '#C8D3D9',
        rgb: 'rgb(200,211,217)',
      },
    },
    cat: {
      catYellow: {
        name: 'cat-yellow',
        type: 'primary',
        hex: '#FFCC00',
        rgb: 'rgb(240,184,35)',
      },
      catYellowLighter: {
        name: 'cat-yellow-lighter',
        type: 'secondary',
        hex: '#FFD240',
        rgb: 'rgb(255,210,64)',
      },
      catYellowLightest: {
        name: 'cat-yellow-lightest',
        type: 'secondary',
        hex: '#FFE590',
        rgb: 'rgb(255,229,144)',
      },
    },
    rental: {
      rentalRed: {
        name: 'rental-red',
        type: 'primary',
        hex: '#af0e0e',
        rgb: 'rgb(175,14,14)',
      },
      catYellow: {
        name: 'cat-yellow',
        type: 'secondary',
        hex: '#FFCC00',
        rgb: 'rgb(240,184,35)',
      },
      catYellowLightest: {
        name: 'cat-yellow-lightest',
        type: 'secondary',
        hex: '#FFE590',
        rgb: 'rgb(255,229,144)',
      },
    },
    construction: {},
    powerSystems: {},
    plantEngineering: {},
    gray: {
      black: {
        name: 'black',
        hex: '#000000',
        rgb: '0/0/0',
        hsb: null,
      },
      grayDark: {
        name: 'gray-dark',
        hex: '#101111',
        rgb: '16/17/17',
        hsb: null,
      },
      grayMidDark: {
        name: 'gray-mid-dark',
        hex: '#373d3f',
        rgb: '55/61/63',
        hsb: null,
      },
      gray: {
        name: 'gray',
        hex: '#464a4c',
        rgb: '70/74/76',
        hsb: null,
      },
      textGray: {
        name: 'text-gray',
        hex: '#555f61',
        rgb: '85/95/97',
        hsb: null,
      },
      grayLight: {
        name: 'gray-light',
        hex: '#6f7c80',
        rgb: '111/124/128',
        hsb: null,
      },
      disabled: {
        name: 'disabled',
        hex: '#c1c7c9',
        rgb: '193/199/201',
        hsb: null,
      },
      grayLighter: {
        name: 'gray-lighter',
        hex: '#eceeef',
        rgb: '236/238/239',
        hsb: null,
      },
      grayMid: {
        name: 'gray-mid',
        hex: '#f2f3f4',
        rgb: '242/243/244',
        hsb: null,
      },
      grayLightest: {
        name: 'gray-lightest',
        hex: '#f7f7f9',
        rgb: '247/247/249',
        hsb: null,
      },
      white: {
        name: 'white',
        hex: '#ffffff',
        rgb: '255/255/255',
        hsb: null,
      },
    },
    support: {
      alert: {
        name: 'alert',
        hex: '#ff6562',
        rgb: '255/101/98',
        hsb: null,
      },
      warning: {
        name: 'warning',
        hex: '#f0ad4e',
        rgb: '240/73/78',
        hsb: null,
      },
      success: {
        name: 'success',
        hex: '#5cb85c',
        rgb: '92/184/92',
        hsb: null,
      },
      info: {
        name: 'info',
        hex: '#5bc0de',
        rgb: '91/192/222',
        hsb: null,
      },
      alertLighter: {
        name: 'alert-lighter',
        hex: '#ffe2e2',
        rgb: null,
        hsb: null,
      },
      warningLighter: {
        name: 'warning-lighter',
        hex: '#fcf8e3',
        rgb: null,
        hsb: null,
      },
      successLighter: {
        name: 'success-lighter',
        hex: '#dff0d8',
        rgb: null,
        hsb: null,
      },
      infoLighter: {
        name: 'info-lighter',
        hex: '#d9edf7',
        rgb: null,
        hsb: null,
      },
    },
    socialMedia: {
      xing: {
        name: 'xing',
        hex: '#026466',
        rgb: '2/100/102',
        hsb: null,
      },
      facebook: {
        name: 'facebook',
        hex: '#4267b2',
        rgb: '66/103/178',
        hsb: null,
      },
      twitter: {
        name: 'twitter',
        hex: '#1da1f2',
        rgb: '29/161/242',
        hsb: null,
      },
      linkedin: {
        name: 'linkedin',
        hex: '#0077b5',
        rgb: '0/119/181',
        hsb: null,
      },
      kununu: {
        name: 'kununu',
        hex: '#99c613',
        rgb: '153/198/19',
        hsb: null,
      },
      youtube: {
        name: 'youtube',
        hex: '#ff0000',
        rgb: '255/0/0',
        hsb: null,
      },
      googleplus: {
        name: 'googleplus',
        hex: '#dd4b39',
        rgb: '221/75/57',
        hsb: null,
      },
    },
  },
  spacing: {
    component: {
      xxs: {
        px: 4,
        rem: 0.25,
      },
      xs: {
        px: 8,
        rem: 0.5,
      },
      s: {
        px: 12,
        rem: 0.75,
      },
      m: {
        px: 16,
        rem: 1,
      },
      l: {
        px: 24,
        rem: 1.5,
      },
      xl: {
        px: 32,
        rem: 2,
      },
      xxl: {
        px: 48,
        rem: 3,
      },
    },
    layout: {
      xxs: {
        px: 16,
        rem: 1,
      },
      xs: {
        px: 24,
        rem: 1.5,
      },
      s: {
        px: 32,
        rem: 2,
      },
      m: {
        px: 48,
        rem: 3,
      },
      l: {
        px: 64,
        rem: 4,
      },
      xl: {
        px: 96,
        rem: 6,
      },
      xxl: {
        px: 160,
        rem: 10,
      },
    },
  },
}

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
        background_color: theme.colors.gray.white.hex,
        theme_color: theme.colors.corporate.indigoBlue.hex,
        display: `minimal-ui`,
        icon: `src/assets/images/zeppelin_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
  ],
}
