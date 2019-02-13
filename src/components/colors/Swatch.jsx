import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Button from '../button/Button'
import CopyIcon from '../icons/CopyIcon'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexBasis: '20%',
    marginBottom: '2rem',
  },
  button: {
    height: '8rem',
    width: '8rem',
    marginBottom: '0.9375rem',
    position: 'relative',
    cursor: 'pointer',
    border: `1px solid ${ theme.colors.grayMid.hex }`,
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.4,
      },
      '& $backdropContent': {
        opacity: 1,
      },
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.grayDark.hex,
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
    color: theme.colors.white.hex,
  },
  icon: {
    position: 'relative,',
    color: theme.colors.white.hex,
    display: 'block',
  },
  buttonText: {
    position: 'relative,',
    paddingLeft: 5,
    display: 'block',
  },
  text: {
    margin: 0,
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
      <Button
        className={classes.button}
        style={{ background: color.hex }}
        onClick={() => handleCopy(color.hex)}
      >
        <span className={classes.backdrop} />
        <span className={classes.backdropContent}>
          {!isTextCopied && <CopyIcon className={classes.icon} />}
          <span className={classes.buttonText} data-testid="swatch-text">
            {isTextCopied ? 'Copied!' : copyError ? 'Error!' : color.hex}
          </span>
        </span>
      </Button>
      <p className={classes.text}>{color.name}</p>
      <p className={classes.text}>{`HEX: ${ color.hex }`}</p>
      {color.rgb && <p className={classes.text}>{`RGB: ${ color.rgb }`}</p>}
      {color.hsb && <p className={classes.text}>{`HSB: ${ color.hsb }`}</p>}
    </div>
  )
}

Swatch.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.object.isRequired,
}

export default withStyles(styles)(Swatch)
