import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends Component {
  render() {
    const {
      onClick,
      children,
      className: classNameProp,
      fullWidth,
      disabled,
      ...other
    } = this.props
    const className = classNames(
      'zep-button',
      {
        // eslint-disable-next-line
        ['zep-button__full']: fullWidth,
        'zep-button__disabled': disabled,
      },
      classNameProp
    )
    return (
      <button className={className} onClick={onClick} {...other}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
}

export default Button
