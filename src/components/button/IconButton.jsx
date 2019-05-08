import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ButtonBase from './ButtonBase'

function IconButton({ classes, className: classNameProp, children: childrenProp, ...other }) {
  const children = React.cloneElement(childrenProp, {
    className: classnames('zep-button__icon', classes.icon),
  })
  return (
    <ButtonBase
      data-testid="iconButton"
      className="zep-button zep-button-primary zep-button-icon"
      {...other}
    >
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
