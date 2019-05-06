import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'

const styles = {
  button: {
    display: 'inline-block',
    margin: 0,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    background: 'transparent',
    '&:hover, &:focus, &:active, &::focus:not(.focus-visible), &:active:focus': {
      backgroundColor: 'transparent',
      outline: 'none',
    },
  },
}

// ButtonBase has a link element, however a link should not be used as a button.
// Its function here is only to for styling

function ButtonBase({
  onClick,
  children,
  className: classNameProp,
  fullWidth,
  disabled,
  href,
  classes,
  ...other
}) {
  const className = classnames(
    classes.button,
    {
      // eslint-disable-next-line
      ['zep-button--full']: fullWidth,
    },
    classNameProp
  )

  return href ? (
    <a className={className} href={disabled ? null : href} {...other}>
      {children}
    </a>
  ) : (
    <button className={className} onClick={disabled ? null : onClick} {...other}>
      {children}
    </button>
  )
}

ButtonBase.propTypes = {
  classes: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

ButtonBase.defaultProps = {
  fullWidth: false,
  disabled: false,
}

export default withStyles(styles)(ButtonBase)
