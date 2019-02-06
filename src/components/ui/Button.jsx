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
    } = this.props
    const className = classNames(
      'zds-button',
      {
        // eslint-disable-next-line
        ['zds-button__full']: fullWidth,
      },
      classNameProp
    )
    return (
      <button
        className={className}
        onClick={onClick}
        data-testid="buttonComponent"
      >
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  fullWidth: false,
}

export default Button
