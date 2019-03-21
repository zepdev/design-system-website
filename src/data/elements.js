module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          `<button type="button" class="zep-button zep-button-primary">primary</button>`,
          `<button type="button" class="zep-button zep-button-primary" disabled>disabled</button>`,
        ],
        react: false,
        angular: false,
        vue: false,
      },
      secondary: {
        js: [
          `<button type="button" class="zep-button zep-button-secondary">secondary</button>`,
          `<button type="button" class="zep-button zep-button-secondary" disabled>disabled</button>`,
        ],
        react: false,
        angular: false,
        vue: false,
      },
    },
    typography: {
      'zep-typo--special-4': {
        px: '24px',
        rem: '1.5rem',
      },
    },
    structure: {
      'btn-height': {
        property: 'height',
        rem: '3rem',
        px: '48px',
      },
      'btn-padding': {
        property: 'padding',
        rem: '1rem, 1.125rem',
        px: '16px, 18px',
      },
    },
  },
  // input: {
  //   normal: {
  //     js:
  //       '<input type="text" aria-label="description" class="zep-input" value="Input Example" />',
  //     react: false,
  //     angular: false,
  //     vue: false,
  //   },
  // },
  // tabs: {
  //   normal: {
  //     js:
  //       '<div class="zep-tabs"><button class="zep-tab zep-button zep-tab--selected"><p class="zep-tab zep-tab--selected zep-tab--primary">tab 1</p></button><button class="zep-tab zep-button"><p class="zep-tab--label zep-tab--primary">Tab 2</p></button></div>',
  //     react: false,
  //     angular: false,
  //     vue: false,
  //   },
  // },
}
