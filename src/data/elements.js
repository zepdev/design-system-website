/* eslint-disable max-len */
module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          `<button type="button" class="zep-button zep-button-primary">primary</button>`,
          `<button type="button" class="zep-button zep-button-primary zep-button-primary--cat">primary</button>`,
          `<button type="button" class="zep-button zep-button-primary zep-button-primary--rental">primary</button>`,
          `<button type="button" class="zep-button zep-button-primary" disabled>disabled</button>`,
        ],
      },
      secondary: {
        js: [
          `<button type="button" class="zep-button zep-button-secondary">secondary</button>`,
          `<button type="button" class="zep-button zep-button-secondary zep-button-secondary--cat">secondary</button>`,
          `<button type="button" class="zep-button zep-button-secondary zep-button-secondary--rental">secondary</button>`,
          `<button type="button" class="zep-button zep-button-secondary" disabled>
            disabled
          </button>`,
        ],
      },
    },
    typography: {
      'zep-typo--special-4': {
        px: '24px',
        rem: '1.5rem',
        specifications: [
          'font-family: "Teko"',
          'font-weight: 400 (regular)',
          'line-height: 1.5 (24px)',
          'text-transform: uppercase',
        ],
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
  tag: {
    demo: {
      primary: {
        js: [`<span class="zep-tag">tag</span>`],
        react: false,
        angular: false,
        vue: false,
      },
      hover: {
        js: [`<span class="zep-tag-hover">hover</span>`],
        react: false,
        angular: false,
        vue: false,
      },
    },
    typography: {
      'zep-typo--special-4': {
        px: '24px',
        rem: '1.5rem',
        specifications: [
          'font-family: "Teko"',
          'font-weight: 400 (regular)',
          'line-height: 1.5 (24px)',
          'text-transform: uppercase',
        ],
      },
    },
    structure: {
      'tag-height': {
        property: 'height',
        rem: '3rem',
        px: '48px',
      },
      'tag-padding': {
        property: 'padding',
        rem: '1rem, 1.125rem',
        px: '16px, 18px',
      },
    },
  },
  textarea: {
    demo: {
      primary: {
        js: [
          `<textarea class="zep-textarea" rows="4" cols="50">textarea</textarea>`,
        ],
        react: false,
        angular: false,
        vue: false,
      },
      variant: {
        js: [
          `<textarea class="zep-textarea-variant" rows="4" cols="50">variant</textarea>`,
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
        specifications: [
          'font-family: "Teko"',
          'font-weight: 400 (regular)',
          'line-height: 1.5 (24px)',
          'text-transform: uppercase',
        ],
      },
    },
    structure: {
      'textarea-height': {
        property: 'height',
        rem: '3rem',
        px: '48px',
      },
      'textarea-padding': {
        property: 'padding',
        rem: '1rem, 1.125rem',
        px: '16px, 18px',
      },
    },
  },
}
