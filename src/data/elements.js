/* eslint-disable no-dupe-keys */
/* eslint-disable max-len */
module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          `<button type="button" class="zep-button zep-button-primary"><span class="zep-button__text">Primary Button</span></button>`,
          `<button type="button" class="zep-button zep-button-primary zep-button-primary--disabled"><span class="zep-button__text">Disabled</span></button>`,
        ],
      },
      secondary: {
        js: [
          `<button type="button" class="zep-button zep-button-secondary"><span class="zep-button__text">Secondary Button</span></button>`,
          `<button type="button" class="zep-button zep-button-secondary zep-button-secondary--disabled">
          <span class="zep-button__text">Disabled</span>
          </button>`,
        ],
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
    },
  },
  numberInput: {
    demo: {
      primary: {
        js: [
          `<div>
          <button class="zep-button zep-button--number-input"><span class="zepicons zepicons-minus" aria-label="minus" /></button><label for="counter" class="zep-visually-hidden">Counter</label><input type="text" class="zep-input zep-input--number" value="1" id="counter" /><button class="zep-button zep-button--number-input"><span class="zepicons zepicons-plus" aria-label="plus" /></button>
          </div>`,
        ],
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
  },
  tag: {
    demo: {
      primary: {
        js: [
          `<span class="zep-tag">Tag<i class="zepicons zepicons-close"></i></span>`,
        ],
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
