/* eslint-disable no-dupe-keys */
/* eslint-disable max-len */
module.exports = {
  button: {
    demo: {
      primary: {
        js: [
          '<button class="zep-button zep-button--primary">Default</button>',
          '<button class="zep-button zep-button--primary zep-button--medium">Medium</button>',
          '<button class="zep-button zep-button--primary zep-button--small">Small</button>',
          '<button class="zep-button zep-button--primary" disabled>Disabled</button>',
          '<button class="zep-button zep-button--primary zep-button--icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="zep-button__icon"><title>Icon/Essential/Add</title><path d="M12 2c.31 0 .57.23.62.53v8.84h8.76a.62.62 0 01.09 1.25h-8.85v8.76a.62.62 0 01-1.24.09v-8.85H2.62a.62.62 0 01-.09-1.24h8.85V2.61c0-.34.27-.62.62-.62z" fill="currentColor" fill-rule="evenodd"/></svg></button>',
        ],
      },
      secondary: {
        js: [
          '<button class="zep-button zep-button--secondary">Default</button>',
          '<button class="zep-button zep-button--secondary zep-button--medium">Medium</button>',
          '<button class="zep-button zep-button--secondary zep-button--small">Small</button>',
          '<button class="zep-button zep-button--secondary" disabled>Disabled</button>',
          '<button class="zep-button zep-button--secondary zep-button--icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="zep-button__icon"><title>Icon/Essential/Add</title><path d="M12 2c.31 0 .57.23.62.53v8.84h8.76a.62.62 0 01.09 1.25h-8.85v8.76a.62.62 0 01-1.24.09v-8.85H2.62a.62.62 0 01-.09-1.24h8.85V2.61c0-.34.27-.62.62-.62z" fill="currentColor" fill-rule="evenodd"/></svg></button>',
        ],
      },
      other: {
        js: [
          '<button class="zep-button zep-button--primary zep-button--full">Full Width</button>',
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
          <button class="zep-button zep-button--icon" disabled>
            <svg class="zep-button__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Arrow/Chevron/Left</title><path d="M9.26 12c0-.21.07-.42.2-.59l.08-.09 4.14-4.14a.62.62 0 01.95.8l-.07.09L10.63 12l3.93 3.93c.22.22.24.56.07.8l-.07.09a.63.63 0 01-.8.07l-.08-.07-4.14-4.14a.96.96 0 01-.28-.68z" fill="currentColor" fill-rule="evenodd"/></svg>
          </button>
          <button class="zep-button zep-button--icon" disabled>
          <svg class="zep-button__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Arrow/Chevron/Left</title><path d="M9.26 12c0-.21.07-.42.2-.59l.08-.09 4.14-4.14a.62.62 0 01.95.8l-.07.09L10.63 12l3.93 3.93c.22.22.24.56.07.8l-.07.09a.63.63 0 01-.8.07l-.08-.07-4.14-4.14a.96.96 0 01-.28-.68z" fill="currentColor" fill-rule="evenodd"/></svg>
          </button>
          <button class="zep-button zep-button--pagination zep-button--selected" >
            1
          </button>
          <button class="zep-button zep-button--pagination" >
            2
          </button>
          <button class="zep-button zep-button--pagination" >
            3
          </button>
          <button class="zep-button zep-button--pagination" >
            4
          </button>
          <button class="zep-button zep-button--pagination" >
            5
          </button>
          <button class="zep-button zep-button--icon">
            <svg class="zep-button__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Arrow/Chevron/Right</title><path d="M14.74 12c0 .21-.07.42-.2.59l-.08.09-4.14 4.14a.62.62 0 01-.95-.8l.07-.09L13.37 12 9.44 8.07a.63.63 0 01-.07-.8l.07-.09a.63.63 0 01.8-.07l.08.07 4.14 4.14c.18.18.28.42.28.68z" fill="currentColor" fill-rule="evenodd"/></svg>
          </button>
          <button class="zep-button zep-button--icon">
          <svg class="zep-button__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Arrow/Chevron/Right</title><path d="M14.74 12c0 .21-.07.42-.2.59l-.08.09-4.14 4.14a.62.62 0 01-.95-.8l.07-.09L13.37 12 9.44 8.07a.63.63 0 01-.07-.8l.07-.09a.63.63 0 01.8-.07l.08.07 4.14 4.14c.18.18.28.42.28.68z" fill="currentColor" fill-rule="evenodd"/></svg>
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
                    <svg class="zep-select__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Arrow/Down</title><path d="M2.18 7.5a.63.63 0 01.8-.07l.09.07L12 16.43l8.93-8.93a.63.63 0 01.8-.07l.09.07c.21.22.24.55.07.8l-.07.08-8.94 8.94a1.25 1.25 0 01-1.66.1l-.1-.1-8.94-8.94a.62.62 0 010-.88z" fill="currentColor" fill-rule="evenodd"/></svg>
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
            <button class="zep-tab zep-tab--selected" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabIndex="0">
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
            <svg class="zep-tab__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Info</title><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zm-.63 6.88c.65 0 1.18.49 1.25 1.12v3.25c0 .31.24.57.54.62h.72a.62.62 0 01.09 1.25h-.72c-.99 0-1.8-.76-1.87-1.72v-3.28h-.63a.62.62 0 01-.1-1.24h.73zM11.7 7h.1a.94.94 0 11-.21 0h.1z" fill="currentColor" fill-rule="evenodd"/></svg>
              Tab 1
            </button>
          </div>
          <div class="zep-tabs__item">
            <button class="zep-tab zep-tab--small" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabIndex="-1">
            <svg class="zep-tab__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Info</title><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zm-.63 6.88c.65 0 1.18.49 1.25 1.12v3.25c0 .31.24.57.54.62h.72a.62.62 0 01.09 1.25h-.72c-.99 0-1.8-.76-1.87-1.72v-3.28h-.63a.62.62 0 01-.1-1.24h.73zM11.7 7h.1a.94.94 0 11-.21 0h.1z" fill="currentColor" fill-rule="evenodd"/></svg>
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
          <svg class="zep-search__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Search</title><path d="M12.17 3.06A8.18 8.18 0 0117.4 16.5l5.43 5.43a.63.63 0 01-.8.96l-.09-.07-5.43-5.43a8.17 8.17 0 11-4.33-14.33zM5.64 7.01a6.93 6.93 0 1011.07 8.33A6.93 6.93 0 005.64 7.01z" fill="currentColor" fill-rule="evenodd"/></svg>
          <label class="zep-visually-hidden" htmlFor="searchbar"> Search </label>
</div>`,
          `<div class="zep-search" style="width: 100%;">
          <input type="text" class="zep-search__input zep-search__input--searchfield" placeholder="Search" id="searchbar"
          />
          <svg class="zep-search__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Search</title><path d="M12.17 3.06A8.18 8.18 0 0117.4 16.5l5.43 5.43a.63.63 0 01-.8.96l-.09-.07-5.43-5.43a8.17 8.17 0 11-4.33-14.33zM5.64 7.01a6.93 6.93 0 1011.07 8.33A6.93 6.93 0 005.64 7.01z" fill="currentColor" fill-rule="evenodd"/></svg>
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
          <button class="zep-button zep-button--icon">
          <svg class="zep-button__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Subtract</title><path d="M21.38 11.38a.62.62 0 01.09 1.24H2.62a.62.62 0 01-.09-1.24h18.85z" fill="currentColor" fill-rule="evenodd"/></svg>
          </button>
          <label for="counter" class="zep-visually-hidden">Counter</label><input type="text" class="zep-input zep-input--number" value="1" id="counter" />
          <button class="zep-button zep-button--icon">
          <svg class="zep-button__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Add</title><path d="M12 2c.31 0 .57.23.62.53v8.84h8.76a.62.62 0 01.09 1.25h-8.85v8.76a.62.62 0 01-1.24.09v-8.85H2.62a.62.62 0 01-.09-1.24h8.85V2.61c0-.34.27-.62.62-.62z" fill="currentColor" fill-rule="evenodd"/></svg>
          </button>
</div>`,
        ],
      },
    },
  },
  radio: {
    demo: {
      default: {
        js: [
          `<div className="zep-radio">
          <input
            className="zep-radio__input"
            type="radio"
            id="zep-radio-1"
            name="radio"
          />
          <label className="zep-radio__label" htmlFor="zep-radio-1">
            zep-radio block element
          </label>
        </div>
        <div className="zep-radio">
          <input
            className="zep-radio__input"
            type="radio"
            id="zep-radio-11"
            name="radio"
          />
          <label className="zep-radio__label" htmlFor="zep-radio-11">
            zep-radio block element
          </label>
        </div>`,
          `<div className="zep-radio zep-radio--inline">
          <input
            className="zep-radio__input"
            type="radio"
            id="zep-radio-2"
            name="radio"
          />
          <label className="zep-radio__label" htmlFor="zep-radio-2">
            zep-radio inline element
          </label>
        </div>
        <div className="zep-radio zep-radio--inline">
          <input
            className="zep-radio__input"
            type="radio"
            id="zep-radio-3"
            name="radio"
          />
          <label className="zep-radio__label" htmlFor="zep-radio-3">
            zep-radio inline element 2
          </label>
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
    <svg viewBox="0 0 24 24">
      <circle class="stroke" cx="12" cy="12" r="9.38" />
    </svg>
</div>`,
          `<div class="zep-spinner zep-spinner--medium">
    <svg viewBox="0 0 24 24">
      <circle class="stroke" cx="12" cy="12" r="9.38" />
    </svg>
</div>`,
          `<div class="zep-spinner zep-spinner--large">
    <svg viewBox="0 0 24 24">
      <circle class="stroke" cx="12" cy="12" r="9.38" />
    </svg>
</div>`,
        ],
      },
      inverted: {
        js: [
          `<div style="background:black;padding:30px;"><div class="zep-spinner zep-spinner--invert">
    <svg viewBox="0 0 24 24">
      <circle class="stroke" cx="12" cy="12" r="9.38" />
    </svg>
</div>`,
        ],
      },
    },
  },
  tag: {
    demo: {
      default: {
        js: [
          `<span class="zep-tag">Tag<button class="zep-tag__button"><svg class="zep-tag__icon" version="1.1" xmlns="http://www.w3.org/2000/
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Icon/Essential/Close Mini</title><path d="M7.98 7.11l.09.07L12 11.12l3.93-3.94a.62.62 0 01.96.8l-.07.09L12.88 12l3.94 3.93a.62.62 0 01-.8.96l-.09-.07L12 12.88l-3.93 3.94a.62.62 0 01-.96-.8l.07-.09L11.12 12 7.18 8.07a.63.63 0 01.8-.96z" fill="currentColor" fill-rule="evenodd"/></svg>
          </button>
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
    arrowChevron: [
      "zep-icon-arrow-chevron-down",
      "zep-icon-arrow-chevron-left",
      "zep-icon-arrow-chevron-right",
      "zep-icon-arrow-chevron-up",
    ],
    arrow: [
      "zep-icon-arrow-down",
      "zep-icon-arrow-left",
      "zep-icon-arrow-right",
      "zep-icon-arrow-up",
    ],
    communication: [
      "zep-icon-communication-email",
      "zep-icon-communication-email-check",
      "zep-icon-communication-email-send",
      "zep-icon-communication-phone",
    ],
    ecom: [
      "zep-icon-ecom-accounting-invoice-mail",
      "zep-icon-ecom-award-star-head",
      "zep-icon-ecom-barcode-tag",
      "zep-icon-ecom-cart-add",
      "zep-icon-ecom-cart",
      "zep-icon-ecom-certified-ribbon",
      "zep-icon-ecom-delivery-truck",
      "zep-icon-ecom-offer",
      "zep-icon-ecom-receipt-slip",
    ],
    essential: [
      "zep-icon-essential-add",
      "zep-icon-essential-alarm-bell",
      "zep-icon-essential-alert-triangle",
      "zep-icon-essential-avatar-check",
      "zep-icon-essential-avatar-remove",
      "zep-icon-essential-avatar",
      "zep-icon-essential-check",
      "zep-icon-essential-check-small",
      "zep-icon-essential-close",
      "zep-icon-essential-close-mini",
      "zep-icon-essential-cookie",
      "zep-icon-essential-dashboard",
      "zep-icon-essential-delete",
      "zep-icon-essential-download",
      "zep-icon-essential-edit",
      "zep-icon-essential-expand",
      "zep-icon-essential-filter-1",
      "zep-icon-essential-filter-2",
      "zep-icon-essential-hide",
      "zep-icon-essential-home-filled",
      "zep-icon-essential-home",
      "zep-icon-essential-info",
      "zep-icon-essential-loading-spinner",
      "zep-icon-essential-login",
      "zep-icon-essential-logout",
      "zep-icon-essential-low-speed",
      "zep-icon-essential-menu",
      "zep-icon-essential-mobile-phone",
      "zep-icon-essential-print",
      "zep-icon-essential-question-circle",
      "zep-icon-essential-remove",
      "zep-icon-essential-search",
      "zep-icon-essential-settings",
      "zep-icon-essential-shrink",
      "zep-icon-essential-sort",
      "zep-icon-essential-star-filled",
      "zep-icon-essential-star",
      "zep-icon-essential-stopwatch",
      "zep-icon-essential-vertical-menu",
      "zep-icon-essential-vertical-menu-filled",
      "zep-icon-essential-view",
      "zep-icon-essential-world",
    ],
    flag: [
      "zep-icon-flag-au",
      "zep-icon-flag-br",
      "zep-icon-flag-cn",
      "zep-icon-flag-de",
      "zep-icon-flag-fr",
      "zep-icon-flag-gb",
      "zep-icon-flag-in",
      "zep-icon-flag-it",
      "zep-icon-flag-sa",
      "zep-icon-flag-sg",
      "zep-icon-flag-us",
    ],
    location: [
      "zep-icon-location-dot",
      "zep-icon-location-dot-yellow",
      "zep-icon-location-dot-indigo",
      "zep-icon-location-dot-red",
      "zep-icon-location-gps",
      "zep-icon-location-gps-active",
      "zep-icon-location-pin",
      "zep-icon-location-pin-yellow",
      "zep-icon-location-pin-indigo",
      "zep-icon-location-pin-red",
    ],
    media: [
      "zep-icon-media-pause",
      "zep-icon-media-pause-filled",
      "zep-icon-media-play",
      "zep-icon-media-play-filled",
      "zep-icon-media-stop",
      "zep-icon-media-stop-filled",
    ],
    product: ["zep-icon-product-container-mixer"],
    sbuNew: [
      "zep-icon-sbu-new-aviation-1",
      "zep-icon-sbu-new-aviation-2",
      "zep-icon-sbu-new-systems",
      "zep-icon-sbu-new-zbm",
      "zep-icon-sbu-new-zps",
      "zep-icon-sbu-new-zrd",
    ],
    sbuSystems: [
      "zep-icon-sbu-systems-aviation",
      "zep-icon-sbu-systems-aviation-badge",
      "zep-icon-sbu-systems-default-1",
      "zep-icon-sbu-systems-default-2",
      "zep-icon-sbu-systems-products",
      "zep-icon-sbu-systems-service",
    ],
    sbuZBM: [
      "zep-icon-sbu-zbm-default",
      "zep-icon-sbu-zbm-excavator",
      "zep-icon-sbu-zbm-service",
      "zep-icon-sbu-zbm-used",
    ],
    sbuZPS: [
      "zep-icon-sbu-zps-default",
      "zep-icon-sbu-zps-service",
      "zep-icon-sbu-zps-used",
    ],
    sbuZRD: [
      "zep-icon-sbu-zrd-default",
      "zep-icon-sbu-zrd-infrastructure",
      "zep-icon-sbu-zrd-logistics",
      "zep-icon-sbu-zrd-rental",
    ],
    social: [
      "zep-icon-social-facebook",
      "zep-icon-social-instagram",
      "zep-icon-social-kununu",
      "zep-icon-social-linkedin",
      "zep-icon-social-twitter",
      "zep-icon-social-youtube",
      "zep-icon-social-xing",
      "zep-icon-social-whatsapp",
    ],
  },
}
