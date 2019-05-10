import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ButtonBase from './ButtonBase'

function IconButton({ classes, className: classNameProp, children: childrenProp, ...other }) {
  const children = childrenProp
    ? React.cloneElement(childrenProp, {
      className: classnames('zep-button__icon', childrenProp.props.className),
    })
    : null

  return (
    <ButtonBase className="zep-button zep-button-primary zep-button-icon" {...other}>
      {children}
    </ButtonBase>
  )
}

IconButton.propTypes = {
  className: PropTypes.object,
  children: PropTypes.object.isRequired,
  classes: PropTypes.object,
}

export default IconButton
