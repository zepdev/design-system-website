import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'
import Button from '../button/Button'
import CopyIcon from '../icons/CopyIcon'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing.xl.px,
  },
  third: {
    flexBasis: '30%',
  },
  quarter: {
    flexBasis: '22%',
  },
  button: {
    height: '8rem',
    width: '100%',
    marginBottom: theme.spacing.s.px,
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
    position: 'relative,',
    color: theme.colors.gray.white.hex,
    display: 'block',
  },
  buttonText: {
    position: 'relative,',
    paddingLeft: 5,
    display: 'block',
  },
  text: {
    margin: 0,
    color: theme.colors.gray.grayLight.hex,
  },
  name: {
    marginTop: 0,
    fontWeight: 500,
    marginBottom: theme.spacing.s.px,
  },
})

function Swatch({ color, section, classes }) {
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
    <div
      className={classnames(classes.root, section === 'primary' ? classes.third : classes.quarter)}
    >
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
      <p className={classnames(classes.name, 'zep-typo--normal-7')}>{color.name}</p>
      <p className={classnames(classes.text, 'zep-typo--normal-8')}>{`HEX: ${ color.hex }`}</p>
      {color.rgb && (
        <p className={classnames(classes.text, 'zep-typo--normal-8')}>{`RGB: ${ color.rgb }`}</p>
      )}
      {color.hsb && (
        <p className={classnames(classes.text, 'zep-typo--normal-8')}>{`HSB: ${ color.hsb }`}</p>
      )}
    </div>
  )
}

Swatch.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.object.isRequired,
  section: PropTypes.string,
}

export default withStyles(styles)(Swatch)
