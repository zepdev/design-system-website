/* eslint-disable no-dupe-keys */
/* eslint-disable max-len */
module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          `<button type="button" class="zep-button zep-button-primary"><span class="zep-button__text">Primary Button</span></button>`,
          `<button type="button" class="zep-button zep-button-primary" disabled><span class="zep-button__text">Disabled</span></button>`,
        ],
      },
      secondary: {
        js: [
          `<button type="button" class="zep-button zep-button-secondary"><span class="zep-button__text">Secondary Button</span></button>`,
          `<button type="button" class="zep-button zep-button-secondary" disabled><span class="zep-button__text">Disabled</span></button>`,
        ],
      },
    },
  },
  checkbox: {
    demo: {
      primary: {
        js: [
          `<div class="zep-checkbox">
        <input class="zep-checkbox__input" type="checkbox" value="" id="checkboxZep" />
        <label class="zep-checkbox__label" for="checkboxZep">Zeppelin Checkbox</label>
</div>`,
          `<div class="zep-checkbox">
          <input class="zep-checkbox__input" type="checkbox" value="" id="checkboxDisabled" disabled />
          <label class="zep-checkbox__label" for="checkboxDisabled">Disabled Checkbox</label>
</div>`,
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
          `<label class="zep-radio" style={{ marginBottom: 15 }}>
          <input type="radio" name="radio" class="zep-radio__input" />
          <span class="zep-radio__indicator" />
          <span class="zep-radio__label">Radio Button</span>
</label>`,
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
      bullet: {
        js: [
          '<ul class="zep-list"><li class="zep-list__item">Bullet List Item</li></ul>',
        ],
      },
      attribute: {
        js: [
          '<ul class="zep-list"><li class="zep-list__item zep-list__item--attribute"><span class="zep-list__label">label</span>Attribute List Item</li></ul>',
        ],
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
