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
    typefaces: {
      roboto: "'Roboto', Arial, Helvetica, sans-serif",
      teko: "Teko', sans-serif",
    },
    basics: {
      fontSizeBase: {
        specification: 'font-size-base',
        px: '16px',
        rem: '1rem',
        weight: null,
      },
      lineHeightBase: {
        specification: 'line-height-base',
        px: '24px',
        rem: '1.5rem',
        weight: null,
      },
      fontWeightBase: {
        specification: 'font-weight-base',
        px: null,
        rem: null,
        weight: 400,
      },
    },
    headings: {
      normal: {
        'zep-typo--normal-1': {
          rem: '2.5rem',
          px: '40px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (60px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-2': {
          rem: '2.25rem',
          px: '36px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (54px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-3': {
          rem: '1.75rem',
          px: '28px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (42px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-4': {
          rem: '1.5rem',
          px: '24px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (36px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-5': {
          rem: '1.25rem',
          px: '20px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (30px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-6': {
          rem: '1rem',
          px: '16px',
          specifications: [
            'font-family: "Roboto"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (24px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-7': {
          rem: '0.875rem',
          px: '14px',
          specifications: [
            'font-family: "Roboto"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (21px)',
            'text-transform: none',
          ],
        },
        'zep-typo--normal-8': {
          rem: '0.75rem',
          px: '12px',
          specifications: [
            'font-family: "Roboto"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (18px)',
            'text-transform: none',
          ],
        },
      },
      display: {
        'zep-typo--display-1': {
          rem: '3.55rem',
          px: '56px',
          weight: 400,
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (144px)',
            'text-transform: none',
          ],
        },
        'zep-typo--display-2': {
          rem: '4.5rem',
          px: '72px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (132px)',
            'text-transform: none',
          ],
        },
        'zep-typo--display-3': {
          rem: '5.5rem',
          px: '88px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (108px)',
            'text-transform: none',
          ],
        },
        'zep-typo--display-4': {
          rem: '6rem',
          px: '96px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (84px)',
            'text-transform: none',
          ],
        },
      },
      special: {
        'zep-typo--special-1': {
          rem: '0.75rem',
          px: '12px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (36px)',
            'text-transform: uppercase',
          ],
        },
        'zep-typo--special-2': {
          rem: '0.875rem',
          px: '14px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (24px)',
            'text-transform: uppercase',
          ],
        },
        'zep-typo--special-3': {
          rem: '1rem',
          px: '16px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (21px)',
            'text-transform: uppercase',
          ],
        },
        'zep-typo--special-4': {
          rem: '1.5rem',
          px: '24px',
          specifications: [
            'font-family: "Teko"',
            'font-weight: 400 (regular)',
            'line-height: 1.5 (18px)',
            'text-transform: uppercase',
          ],
        },
      },
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
    xxs: { px: '4px', rem: '0.25rem' },
    xs: { px: '8px', rem: '0.5rem' },
    s: { px: '12px', rem: '0.75rem' },
    m: { px: '16px', rem: '1rem' },
    l: { px: '24px', rem: '1.5rem' },
    xl: { px: '32px', rem: '2rem' },
    xxl: { px: '48px', rem: '3rem' },
  },
}
