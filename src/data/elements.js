/* eslint-disable no-dupe-keys */
/* eslint-disable max-len */
module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          '<button class="zep-button zep-button-primary">Default</button>',
          '<button class="zep-button zep-button-primary zep-button--medium">Medium</button>',
          '<button class="zep-button zep-button-primary zep-button--small">Small</button>',
          '<button class="zep-button zep-button-primary" disabled>Disabled</button>',
          '<button class="zep-button zep-button-primary zep-button-icon"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="title_copy" class="zep-button__icon"><title id="title_copy">Copy</title><path fill="currentColor" d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"></path></svg></button>',
        ],
      },
      secondary: {
        js: [
          '<button class="zep-button zep-button-secondary">Default</button>',
          '<button class="zep-button zep-button-secondary zep-button--medium">Medium</button>',
          '<button class="zep-button zep-button-secondary zep-button--small">Small</button>',
          '<button class="zep-button zep-button-secondary" disabled>Disabled</button>',
          '<button class="zep-button zep-button-secondary zep-button-icon"><svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="title_copy" class="zep-button__icon"><title id="title_copy">Copy</title><path fill="currentColor" d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"></path></svg></button>',
        ],
      },
      other: {
        js: [
          '<button class="zep-button zep-button-primary zep-button--full">Full Width</button>',
        ],
      },
    },
  },
  checkbox: {
    demo: {
      default: {
        js: [
          `<div><input class="zep-checkbox" type="checkbox" value="" id="checkboxZep" />
        <label class="zep-checkbox__label" for="checkboxZep">Zeppelin Checkbox</label></div>`,
          `<div><input class="zep-checkbox" type="checkbox" value="" id="checkboxDisabled" disabled />
          <label class="zep-checkbox__label" for="checkboxDisabled">Disabled Checkbox</label></div>`,
        ],
      },
    },
  },
  input: {
    demo: {
      default: {
        js: [
          `<div class="zep-input-container" style="width: 100%;">
          <input type="text" id="inputZeppelin" placeholder="Placeholder" class="zep-input">
          <label class="zep-input-container__label" for="inputZeppelin">Input Field</label>
          <label class="zep-input-container__feedback" for="inputZeppelin">Your feedback here</label>
  </div>`,
        ],
      },
      error: {
        js: [
          `<div class="zep-input-container zep-input-container--error" style="width: 100%;">
          <input type="text" id="inputZeppelin" placeholder="Placeholder" class="zep-input">
          <label class="zep-input-container__label" for="inputZeppelin">Input Field</label>
          <label class="zep-input-container__feedback" for="inputZeppelin">Your feedback here</label>
  </div>`,
        ],
      },
    },
  },
  pagination: {
    demo: {
      default: {
        js: [
          `<div class="zep-pagination">
          <button class="zep-button zep-button-icon" disabled>
            <svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-previous-page</title><path d="M23.213 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.893zM10.667 8h-2.667v16h2.667v-16z"></path></svg>
          </button>
          <button class="zep-button zep-button-icon" disabled>
            <svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-chevron-left</title><path d="M20.547 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8z"></path></svg>
          </button>
          <button class="zep-button zep-button-pagination" >
            1
          </button>
          <button class="zep-button zep-button-pagination" >
            2
          </button>
          <button class="zep-button zep-button-pagination" >
            3
          </button>
          <button class="zep-button zep-button-pagination" >
            4
          </button>
          <button class="zep-button zep-button-pagination" >
            5
          </button>
          <button class="zep-button zep-button-icon">
            <svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-chevron-right</title><path d="M11.453 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8z"></path></svg>
          </button>
          <button class="zep-button zep-button-icon">
            <svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-next-page</title><path d="M8 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.893zM20.547 8h2.667v16h-2.667v-16z"></path></svg>
          </button>
</div>`,
        ],
      },
    },
  },
  notification: {
    demo: {
      danger: {
        js: [
          `<div class="zep-notification zep-notification--danger" >
          Notification
</div>`,
        ],
      },
      info: {
        js: [
          `<div class="zep-notification zep-notification--info">
          Notification
</div>`,
        ],
      },
      warning: {
        js: [
          `<div class="zep-notification zep-notification--warning">
          Notification
</div>`,
        ],
      },
      success: {
        js: [
          `<div class="zep-notification zep-notification--success">
          Notification
</div>`,
        ],
      },
    },
  },
  select: {
    demo: {
      default: {
        js: [
          `<div class="zep-select" style="width: 100%;">
                <label id="exp_elem" class="zep-select__label">Label</label>
                <div id="exp_wrapper">
                  <button aria-haspopup="listbox" aria-labelledby="exp_elem exp_button" id="exp_button" class="zep-select__button" >
                    Select One
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="zep-select__icon"><title>zepicons-navigation-dropdown</title><path fill="currentColor" d="M9.333 18.667h13.333l-6.667 6.667-6.667-6.667zM22.667 13.333h-13.333l6.667-6.667 6.667 6.667z"></path></svg>
                  </button>
                  <ul id="exp_elem_list" tabIndex="-1" role="listbox" aria-labelledby="exp_elem" class="zep-select__list"
                    //class="zep-visually-hidden"
                  >
                    <li id="exp_elem_A" role="option" tabIndex="0" class="zep-select__listitem">
                      option A
                    </li>
                    <li id="exp_elem_B" role="option" tabIndex="-1" class="zep-select__listitem">
                      option B
                    </li>
                  </ul>
</div>`,
        ],
      },
    },
  },
  tabs: {
    demo: {
      default: {
        js: [
          `<div class="zep-tabs" role="tablist" aria-label="Tabs Default">
          <div class="zep-tabs__item">
            <button class="zep-tab" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabIndex="0">
              Tab 1
            </button>
          </div>
          <div class="zep-tabs__item">
            <button class="zep-tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex="-1">
              Tab 2
            </button>
          </div>
</div>`,
        ],
      },
      small: {
        js: [
          `<div class="zep-tabs" role="tablist" aria-label="Tabs Default">
          <div class="zep-tabs__item">
            <button class="zep-tab zep-tab--small" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabIndex="0">
              Tab 1
            </button>
          </div>
          <div class="zep-tabs__item">
            <button class="zep-tab zep-tab--small" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex="-1">
              Tab 2
            </button>
          </div>
</div>`,
        ],
      },
      icon: {
        js: [
          `<div class="zep-tabs" role="tablist" aria-label="Tabs Default">
          <div class="zep-tabs__item">
            <button class="zep-tab zep-tab--small" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabIndex="0">
            <svg class="zep-tab__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-calendar-range</title><path fill="currentColor" d="M12 14.667h-2.667v2.667h2.667v-2.667zM17.333 14.667h-2.667v2.667h2.667v-2.667zM22.667 14.667h-2.667v2.667h2.667v-2.667zM25.333 5.333h-1.333v-2.667h-2.667v2.667h-10.667v-2.667h-2.667v2.667h-1.333c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.473 1.194 2.667 2.667 2.667h18.667c1.473 0 2.667-1.194 2.667-2.667v-18.667c0-1.473-1.194-2.667-2.667-2.667v0zM25.333 26.667h-18.667v-14.667h18.667v14.667z"></path></svg>
              Tab 1
            </button>
          </div>
          <div class="zep-tabs__item">
            <button class="zep-tab zep-tab--small" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex="-1">
            <svg class="zep-tab__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-calendar-range</title><path fill="currentColor" d="M12 14.667h-2.667v2.667h2.667v-2.667zM17.333 14.667h-2.667v2.667h2.667v-2.667zM22.667 14.667h-2.667v2.667h2.667v-2.667zM25.333 5.333h-1.333v-2.667h-2.667v2.667h-10.667v-2.667h-2.667v2.667h-1.333c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.473 1.194 2.667 2.667 2.667h18.667c1.473 0 2.667-1.194 2.667-2.667v-18.667c0-1.473-1.194-2.667-2.667-2.667v0zM25.333 26.667h-18.667v-14.667h18.667v14.667z"></path></svg>
              Tab 2
            </button>
          </div>
</div>`,
        ],
      },
    },
  },
  search: {
    demo: {
      default: {
        js: [
          `<div class="zep-search" style="width: 100%;">
          <input type="text" class="zep-search__input zep-search__input--rounded-left" placeholder="Search" id="searchbar"
          />
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="zep-search__icon"><title>zepicons-search</title><path fill="currentColor" d="M12.667 4c4.786 0 8.667 3.88 8.667 8.667 0 2.147-0.787 4.12-2.080 5.64l0.36 0.36h1.053l6.667 6.667-2 2-6.667-6.667v-1.053l-0.36-0.36c-1.52 1.293-3.493 2.080-5.64 2.080-4.786 0-8.667-3.88-8.667-8.667s3.88-8.667 8.667-8.667v0zM12.667 6.667c-3.333 0-6 2.667-6 6s2.667 6 6 6c3.333 0 6-2.667 6-6s-2.667-6-6-6z"></path></svg>
          <label class="zep-visually-hidden" htmlFor="searchbar"> Search </label>
</div>`,
          `<div class="zep-search" style="width: 100%;">
          <input type="text" class="zep-search__input zep-search__input--searchfield" placeholder="Search" id="searchbar"
          />
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="zep-search__icon"><title>zepicons-search</title><path fill="currentColor" d="M12.667 4c4.786 0 8.667 3.88 8.667 8.667 0 2.147-0.787 4.12-2.080 5.64l0.36 0.36h1.053l6.667 6.667-2 2-6.667-6.667v-1.053l-0.36-0.36c-1.52 1.293-3.493 2.080-5.64 2.080-4.786 0-8.667-3.88-8.667-8.667s3.88-8.667 8.667-8.667v0zM12.667 6.667c-3.333 0-6 2.667-6 6s2.667 6 6 6c3.333 0 6-2.667 6-6s-2.667-6-6-6z"></path></svg>
          <label class="zep-visually-hidden" htmlFor="searchbar"> Search </label>
</div>`,
        ],
      },
    },
  },
  numberInput: {
    demo: {
      default: {
        js: [
          `<div class="zep-numberinput" data-zep-type="number-input" data-zep-step="1" data-zep-max="10" data-zep-min="0">
          <button class="zep-button zep-button-icon"><svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-minus</title><path fill="currentColor" d="M25.333 17.333h-18.667v-2.667h18.667z"></path></svg></button>
          <label for="counter" class="zep-visually-hidden">Counter</label><input type="text" class="zep-input zep-input--number" value="1" id="counter" />
          <button class="zep-button zep-button-icon"><svg class="zep-button__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>zepicons-plus</title><path fill="currentColor" d="M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z"></path></svg></button>
</div>`,
        ],
      },
    },
  },
  radio: {
    demo: {
      default: {
        js: [
          `<div>
          <div class="zep-radio">
          <input type="radio" id="radio1" name="radio" />
          <label htmlFor="radio1">Radio</label>
        </div>
      </div>`,
        ],
      },
    },
  },
  spinner: {
    demo: {
      size: {
        js: [
          `<div class="zep-spinner">
          <svg viewBox="0 0 20 20">
            <circle class="stroke" cx="10" cy="10" r="8" />
          </svg>
        </div>`,
          `<div class="zep-spinner zep-spinner--medium">
        <svg viewBox="0 0 20 20">
          <circle class="stroke" cx="10" cy="10" r="8" />
        </svg>
      </div>`,
          `<div class="zep-spinner zep-spinner--large">
      <svg viewBox="0 0 20 20">
        <circle class="stroke" cx="10" cy="10" r="8" />
      </svg>
    </div>`,
        ],
      },
      inverted: {
        js: [
          `<div style="background:black;padding:30px;"><div class="zep-spinner zep-spinner--invert">
          <svg viewBox="0 0 20 20">
            <circle class="stroke" cx="10" cy="10" r="8" />
          </svg>
        </div></div>`,
        ],
      },
    },
  },
  tag: {
    demo: {
      default: {
        js: [
          `<span class="zep-tag">Tag<button class="zep-tag__button"><svg class="zep-tag__icon" version="1.1" xmlns="http://www.w3.org/2000/
          <svg" width="24" height="24" viewBox="0 0 24 24"><title>zepicons-close</title><path fill="currentColor" d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z"></path></svg></button>
</span>`,
        ],
      },
    },
  },
  table: {
    demo: {
      primary: {
        js: [
          `<table class="zep-table">
<caption class="zep-visually-hidden">Zeppelin Table</caption>
<thead>
  <tr class="zep-table__row zep-table__row--header">
      <th scope="col" class="zep-table__cell zep-table__cell--header">
        Header 1
      </th>
      <th scope="col" class="zep-table__cell zep-table__cell--header">
        Header 2
      </th>
  </tr>
</thead>
<tbody>
    <tr class='zep-table__row zep-table__row--white'>
      <th class="zep-table__cell" scope="row">Cell 1</th>
      <th class="zep-table__cell">Cell 1</th>
    </tr>
    <tr class='zep-table__row zep-table__row--gray'>
      <th class="zep-table__cell" scope="row">Cell 1</th>
      <th class="zep-table__cell">Cell 1</th>
    </tr>
    <tr class='zep-table__row zep-table__row--white'>
      <th class="zep-table__cell" scope="row">Cell 1</th>
      <th class="zep-table__cell">Cell 1</th>
    </tr>
</tbody>
</table>`,
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
