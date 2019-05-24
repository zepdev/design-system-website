import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function IconButton({ className: classNameProp, children: childrenProp, variant, ...other }) {
  const children = childrenProp
    ? React.cloneElement(childrenProp, {
      className: classnames('zep-button__icon', childrenProp.props.className),
    })
    : null

  return (
    <button
      className={classnames(
        'zep-button zep-button-icon',
        {
          'zep-button-primary': variant === 'primary',
          'zep-button-secondary': variant === 'secondary',
        },
        classNameProp
      )}
      {...other}
    >
      {children}
    </button>
  )
}

IconButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

export default IconButton
