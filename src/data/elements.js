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
  checkbox: {
    demo: {
      primary: {
        js: [
          `<input type="checkbox" name="Checkbox" value="A" class="zep-checkbox zep-button-primary">`,
        ],
      },
      secondary: {
        js: [
          `<input type="checkbox" name="Checkbox" value="A" class="zep-checkbox zep-button-secondary">`,
        ],
      },
    },
    typography: {
      // 'zep-typo--special-4': {
      //   px: '24px',
      //   rem: '1.5rem',
      //   specifications: [
      //     'font-family: "Teko"',
      //     'font-weight: 400 (regular)',
      //     'line-height: 1.5 (24px)',
      //     'text-transform: uppercase',
      //   ],
      // },
    },
    structure: {
      'btn-height': {
        // property: 'height',
        // rem: '3rem',
        // px: '48px',
      },
      'btn-padding': {
        // property: 'padding',
        // rem: '1rem, 1.125rem',
        // px: '16px, 18px',
      },
    },
  },
  input: {
    demo: {
      form: {
        js: [
          '<input type="text" id="text" name="text" min="10" max="100" class="zep-input zep-input-text">',
        ],
      },
      static: {
        js: [
          '<input type="text" id="text" name="text" min="10" max="100" class="zep-input zep-input-text">',
        ],
      },
      number: {
        js: [
          '<input type="number" id="number" name="number" min="10" max="100" class="zep-input zep-input-number">',
        ],
      },
    },
    typography: {
      // 'zep-typo--special-4': {
      //   px: '24px',
      //   rem: '1.5rem',
      //   specifications: [
      //     'font-family: "Teko"',
      //     'font-weight: 400 (regular)',
      //     'line-height: 1.5 (24px)',
      //     'text-transform: uppercase',
      //   ],
      // },
    },
    structure: {
      'btn-height': {
        // property: 'height',
        // rem: '3rem',
        // px: '48px',
      },
      'btn-padding': {
        // property: 'padding',
        // rem: '1rem, 1.125rem',
        // px: '16px, 18px',
      },
    },
  },
  radio: {
    demo: {
      primary: {
        js: [
          `<input type="radio" id="radio1" name="zepRadio" value="value1" class="zep-radio zep-radio-primary">
          <label for="zepRadio">Primary</label>`,
        ],
      },
      secondary: {
        js: [
          `<input type="radio" id="radio1" name="zepRadio" value="value1" class="zep-radio zep-radio-secondary">
          <label for="zepRadio">Secondary</label>`,
        ],
      },
    },
    typography: {
      'zep-typo--special-3': {
        px: '16px',
        rem: '1rem',
        specifications: [
          'font-family: "Roboto"',
          'font-weight: 400 (regular)',
          'line-height: 1.5 (21px)',
          'text-transform: none',
        ],
      },
    },
    colors: {
      'zep-tag': {
        property: 'border-color',
        zeppelin: 'cat-yellow',
        cat: null,
        rental: null,
      },
      'zep-tag': {
        property: 'background-color',
        zeppelin: 'white',
        cat: null,
        rental: null,
      },
    },
    structure: {
      'zep-tag': {
        property: 'padding',
        rem: '0.675rem',
        px: '10px',
      },
      'zep-tag': {
        property: 'border',
        rem: '0.675rem',
        px: '2px',
      },
    },
  },
  tag: {
    demo: {
      primary: {
        js: [
          `<span class="zep-tag">Tag<i class="zepicons zepicons-close"></i></span>`,
        ],
      },
    },
    typography: {
      'zep-typo--special-3': {
        px: '16px',
        rem: '1rem',
        specifications: [
          'font-family: "Roboto"',
          'font-weight: 400 (regular)',
          'line-height: 1.5 (21px)',
          'text-transform: none',
        ],
      },
    },
    colors: {
      'zep-tag': {
        property: 'border-color',
        zeppelin: 'cat-yellow',
        cat: null,
        rental: null,
      },
      'zep-tag': {
        property: 'background-color',
        zeppelin: 'white',
        cat: null,
        rental: null,
      },
    },
    structure: {
      'zep-tag': {
        property: 'padding',
        rem: '0.675rem',
        px: '10px',
      },
      'zep-tag': {
        property: 'border',
        rem: '0.675rem',
        px: '2px',
      },
    },
  },
  textarea: {
    demo: {
      primary: {
        js: [
          `<textarea class="zep-textarea zep-textarea-primary">primary</textarea>`,
        ],
      },
      secondary: {
        js: [
          `<textarea class="zep-textarea zep-textarea-secondary">secondary</textarea>`,
        ],
      },
    },
    typography: {
      // 'zep-typo--special-4': {
      //   px: '24px',
      //   rem: '1.5rem',
      //   specifications: [
      //     'font-family: "Teko"',
      //     'font-weight: 400 (regular)',
      //     'line-height: 1.5 (24px)',
      //     'text-transform: uppercase',
      //   ],
      // },
    },
    structure: {
      'btn-height': {
        // property: 'height',
        // rem: '3rem',
        // px: '48px',
      },
      'btn-padding': {
        //   property: 'padding',
        //   rem: '1rem, 1.125rem',
        //   px: '16px, 18px',
        // },
      },
    },
  },
  list: {
    demo: {
      primary: {
        js: [`<ul class="zep-list zep-list-primary">primary</ul>`],
      },
      secondary: {
        js: [`<ul  class="zep-list zep-list-secondary">secondary</ul>`],
      },
    },
    typography: {
      // 'zep-typo--special-4': {
      //   px: '24px',
      //   rem: '1.5rem',
      //   specifications: [
      //     'font-family: "Teko"',
      //     'font-weight: 400 (regular)',
      //     'line-height: 1.5 (24px)',
      //     'text-transform: uppercase',
      //   ],
      // },
    },
    structure: {
      'btn-height': {
        // property: 'height',
        // rem: '3rem',
        // px: '48px',
      },
      'btn-padding': {
        // property: 'padding',
        // rem: '1rem, 1.125rem',
        // px: '16px, 18px',
      },
    },
  },
  iconography: {
    action: [
      'list-plus',
      'print',
      'minus',
      'timer',
      'users',
      'unfold',
      'bookmark',
      'upload',
      'filter',
      'sort',
      'share',
      'view-grid',
      'phone',
      'clock',
      'delete',
      'image-album',
      'edit',
      'star',
      'contacts',
      'attachment',
      'camera',
      'chat',
      'solutions',
      'contact-mail',
      'image',
      'compare',
      'hide',
      'reload',
      'copy',
      'close',
      'email',
      'calendar-range',
      'global',
      'check',
      'plus',
      'direction',
      'flag',
      'bell',
      'dots-vertical',
      'add-solution',
      'add-cart',
      'expand',
      'download',
      'cart',
      'settings',
      'map-marker',
      'link',
      'dots-horizontal',
      'user-edit',
      'average',
      'file-document',
      'file',
      'map',
      'headset',
      'show',
      'zoom-in',
      'briefcase',
      'logout',
      'account',
      'user',
      'open-in-new',
      'crosshair',
      'zoom-out',
      'search',
      'calendar-clock',
    ],
    ps: ['ps-ps', 'ps-service', 'ps-used'],
    cat: ['cat-new', 'cat-service', 'cat-used'],
    systems: [
      'systems-products',
      'systems-aviation',
      'systems-systems',
      'systems-service',
    ],
    rental: ['rental-infrastructure', 'rental-logistics', 'rental-rent'],
    navigation: [
      'chevron-down',
      'menu',
      'previous-page',
      'chevron-up',
      'next-page',
      'chevron-right',
      'chevron-left',
      'home',
    ],
    indicator: ['help', 'info', 'warning'],
    language: ['br', 'gb', 'ger', 'in', 'it', 'ru', 'sa', 'sg'],
    social: [
      'twitter',
      'linkedin',
      'youtube',
      'xing',
      'facebook',
      'googleplus',
      'kununu',
      'instagram',
    ],
  },
}
