module.exports = {
  breakpoints: {
    xs: '36em' /* 576px */,
    s: '48em' /* 768px */,
    m: '62em' /* 992px */,
    l: '75em' /* 1200px */,
    xl: '105em' /* 1680px */,
    xxl: '120em' /* 1920px */,
  },
  typography: {
    fontFamily: "'Roboto', Arial, Helvetica, sans-serif",
    fontBase: '16px',
    headings: {
      1: 'zep-typo--display-1',
      2: 'zep-typo--display-2',
      3: 'zep-typo--display-3',
      4: 'zep-typo--display-4',
    },
  },
  colors: {
    primary: {
      indigoBlue: {
        name: 'indigo-blue',
        hex: '#27166f',
        rgb: '39/22/111',
        hsb: null,
      },
      catYellow: {
        name: 'cat-yellow',
        hex: '#f0b823',
        rgb: '240/184/35',
        hsb: null,
      },
      rentalRed: {
        name: 'rental-red',
        hex: '#af0e0e',
        rgb: '175/14/14',
        hsb: null,
      },
    },
    gray: {
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
      gray: { name: 'gray', hex: '#464a4c', rgb: '70/74/76', hsb: null },
      grayLight: {
        name: 'gray-light',
        hex: '#6f7c80',
        rgb: '111/124/128',
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
      white: { name: 'white', hex: '#ffffff', rgb: '255/255/255', hsb: null },
    },
    support: {
      alert: { name: 'alert', hex: '#ff6562', rgb: '255/101/98', hsb: null },
      warning: {
        name: 'warning',
        hex: '#f0ad4e',
        rgb: '240,/73/78',
        hsb: null,
      },
      success: { name: 'success', hex: '#5cb85c', rgb: '92/184/92', hsb: null },
      info: { name: 'info', hex: '#5bc0de', rgb: '91/192/222', hsb: null },
    },
  },
  spacing: {
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
}
