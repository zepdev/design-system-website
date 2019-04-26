import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ButtonBase from './ButtonBase'

function Button({ children, className: classNameProp, color, disabled, ...other }) {
  const className = classNames(
    'zep-button',
    {
      'zep-button-primary': color === 'primary',
      'zep-button-secondary': color === 'secondary',
      'zep-button-primary--disabled': color === 'primary' && disabled,
      'zep-button-secondary--disabled': color === 'secondary' && disabled,
    },
    classNameProp
  )
  return (
    <ButtonBase className={className} disabled={disabled} {...other}>
      <span className="zep-button__text">{children}</span>
    </ButtonBase>
  )
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
