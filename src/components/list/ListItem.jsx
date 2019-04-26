import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ListItem = ({ variant, label, children, className: classNameProp }) => (
  <li
    data-testid="listItem"
    className={classnames(
      {
        'zep-list-bullet__item': variant === 'bullet',
        'zep-list-attribute__item': variant === 'attribute',
      },
      classNameProp
    )}
  >
    {variant === 'attribute' && label && (
      <span data-testid="listItemLabel" className="zep-list-attribute__label">
        {label}
      </span>
    )}
    {children}
  </li>
)

ListItem.propTypes = {
  classNames: PropTypes.object,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['bullet', 'attribute']),
}

export default ListItem
