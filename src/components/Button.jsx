import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends Component {
  render() {
    const { children, className: classNameProp, fullWidth } = this.props
    const className = classNames(
      'zds-button',
      {
        ['zds-button__full']: fullWidth,
      },
      classNameProp
    )

    return <button className={className}>{children}</button>
  }
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  fullWidth: false,
}

export default Button
