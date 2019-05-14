/* eslint-disable no-dupe-keys */
/* eslint-disable max-len */
module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          `<button class="zep-button zep-button-primary"><span class="zep-button__text">Primary Button</span></button>`,
          `<button class="zep-button zep-button-primary" disabled><span class="zep-button__text">Disabled</span></button>`,
          `<button class="zep-button zep-button-primary zep-button-icon"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="title_copy" class="zep-button__icon"><title id="title_copy">Copy</title><path fill="currentColor" d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"></path></svg></button>`,
        ],
      },
      secondary: {
        js: [
          `<button class="zep-button zep-button-secondary"><span class="zep-button__text">Secondary Button</span></button>`,
          `<button class="zep-button zep-button-secondary" disabled><span class="zep-button__text">Disabled</span></button>`,
          `<button class="zep-button zep-button-secondary zep-button-icon"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="title_copy" class="zep-button__icon"><title id="title_copy">Copy</title><path fill="currentColor" d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"></path></svg></button>`,
        ],
      },
      tertiary: {
        js: [
          `<button class="zep-button zep-button-tertiary"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="title_copy" class="zep-button__icon zep-button__icon--tertiary"><title id="title_copy">Copy</title><path fill="currentColor" d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"></path></svg><span class="zep-button__text zep-button__text--tertiary">Primary Button</span></button>`,
          `<button class="zep-button zep-button-tertiary" disabled><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="title_copy" class="zep-button__icon zep-button__icon--tertiary"><title id="title_copy">Copy</title><path fill="currentColor" d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"></path></svg><span class="zep-button__text zep-button__text--tertiary">Disabled</span></button>`,
        ],
      },
      other: {
        js: [
          `<button class="zep-button zep-button-primary zep-button--full"><span class="zep-button__text">Full Width</span></button>`,
          `<button class="zep-button zep-button-primary zep-button--small"><span class="zep-button__text">Small</span></button>`,
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
          `<div class="zep-form-container">
          <input type="text" id="inputZeppelin" placeholder="Placeholder" class="zep-input">
          <label class="zep-form-container__label" for="inputZeppelin">Input Field</label>
  </div>`,
        ],
      },
    },
  },
  search: {
    demo: {
      form: {
        js: [
          `<div className="zep-form-container">
          <input type="text" className="zep-search" placeholder="Search" id="searchbar"
          />
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="zep-search__icon"><title>zepicons-search</title><path fill="currentColor" d="M12.667 4c4.786 0 8.667 3.88 8.667 8.667 0 2.147-0.787 4.12-2.080 5.64l0.36 0.36h1.053l6.667 6.667-2 2-6.667-6.667v-1.053l-0.36-0.36c-1.52 1.293-3.493 2.080-5.64 2.080-4.786 0-8.667-3.88-8.667-8.667s3.88-8.667 8.667-8.667v0zM12.667 6.667c-3.333 0-6 2.667-6 6s2.667 6 6 6c3.333 0 6-2.667 6-6s-2.667-6-6-6z"></path></svg>
          <label className="zep-visually-hidden" htmlFor="searchbar"> Search </label>
</div>`,
        ],
      },
    },
  },
  numberInput: {
    demo: {
      primary: {
        js: [
          `<div>
          <button class="zep-button  zep-button-icon"><svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>zepicons-minus</title><path fill="currentColor" d="M25.333 17.333h-18.667v-2.667h18.667z"></path></svg></button>
          <label for="counter" class="zep-visually-hidden">Counter</label><input type="text" class="zep-input zep-input--number" value="1" id="counter" />
          <button class="zep-button zep-button-icon"><svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>zepicons-plus</title><path fill="currentColor" d="M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z"></path></svg></button>
</div>`,
        ],
      },
    },
  },
  radio: {
    demo: {
      primary: {
        js: [
          `<label class="zep-radio" >
          Radio Button
          <input type="radio" name="myRadio" class="zep-radio__input" />
          <span class="zep-radio__indicator" />
</label>`,
        ],
      },
    },
  },
  tag: {
    demo: {
      primary: {
        js: [
          `<span class="zep-tag">Tag<svg version="1.1" xmlns="http://www.w3.org/2000/
          <svg" width="24" height="24" viewBox="0 0 24 24"><title>zepicons-close</title><path fill="currentColor" d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z"></path></svg>
</span>`,
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
