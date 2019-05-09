import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'
import ButtonBase from '../button/ButtonBase'
import CopyIcon from '../icons/CopyIcon'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '48%',
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  button: {
    height: '8rem',
    width: '100%',
    marginBottom: theme.spacing.component.s.px,
    position: 'relative',
    cursor: 'pointer',
    border: `1px solid ${ theme.colors.gray.grayMid.hex }`,
    '&:hover, &:focus': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.4,
      },
      '& $backdropContent': {
        opacity: 1,
      },
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    root: {
      flexBasis: '22%',
    },
    button: {
      height: '8rem',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    root: {
      marginRight: `${ theme.spacing.component.m.rem }rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xxl })`]: {
    root: {
      marginRight: `${ theme.spacing.component.m.rem }rem`,
      flexBasis: '24%',
    },
    button: {
      height: '16rem',
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.gray.grayDark.hex,
    opacity: 0,
    transition: 0.5,
  },
  backdropContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    color: theme.colors.gray.white.hex,
  },
  icon: {
    color: theme.colors.gray.white.hex,
    display: 'block',
  },
  buttonText: {
    position: 'relative,',
    paddingLeft: 5,
    display: 'block',
    textTransform: 'uppercase',
  },
  text: {
    margin: 0,
    color: theme.colors.gray.grayLight.hex,
    textTransform: 'uppercase',
  },
  name: {
    marginTop: 0,
    fontWeight: 500,
    marginBottom: theme.spacing.component.s.px,
  },
})

function Swatch({ color, classes }) {
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const handleCopy = color => {
    if (document.queryCommandSupported('copy')) {
      let dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = color
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      setTextCopied(true)
      setTimeout(() => {
        setTextCopied(false)
      }, 2000)
    } else {
      setCopyError(true)
      setTimeout(() => {
        setCopyError(false)
      }, 2000)
    }
  }

  return (
    <div className={classes.root}>
      <ButtonBase
        className={classes.button}
        style={{ background: color.hex }}
        onClick={() => handleCopy(color.hex)}
        data-testid="swatchButton"
      >
        <span className={classes.backdrop} />
        <span className={classes.backdropContent}>
          {!isTextCopied && (
            <CopyIcon className={classes.icon} ariaLabel={`copy hex:${ color.hex }`} />
          )}
          <span
            className={classnames(classes.buttonText, 'zep-typo--normal-4')}
            data-testid="swatchText"
          >
            {isTextCopied ? 'Copied!' : copyError ? 'Error!' : color.hex}
          </span>
        </span>
      </ButtonBase>
      <p className={classnames(classes.name, 'zep-typo--normal-2')}>{color.name}</p>
      <p className={classnames(classes.text, 'zep-typo--normal-1')}>{`HEX: ${ color.hex }`}</p>
      {color.rgb && (
        <p className={classnames(classes.text, 'zep-typo--normal-1')}>{`RGB: ${ color.rgb }`}</p>
      )}
      {color.hsb && (
        <p className={classnames(classes.text, 'zep-typo--normal-1')}>{`HSB: ${ color.hsb }`}</p>
      )}
    </div>
  )
}

Swatch.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.object.isRequired,
}

export default withStyles(styles)(Swatch)
