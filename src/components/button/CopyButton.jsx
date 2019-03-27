import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import ButtonBase from './ButtonBase'
import CopyIcon from '../icons/CopyIcon'

const styles = theme => ({
  button: {
    padding: `${ theme.spacing.m.rem }rem`,
    float: 'right',
    color: theme.colors.gray.white.hex,
    height: 52,
    width: 52,
  },
  icon: {
    color: theme.colors.gray.white.hex,
    width: 20,
    height: 20,
  },
})

function CopyButton({ element, classes }) {
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  function handleCopy() {
    if (document.queryCommandSupported('copy')) {
      let dummy = document.createElement('textarea')
      document.body.appendChild(dummy)
      dummy.value = element
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
    <ButtonBase data-testid="codeBlockButton" onClick={handleCopy} className={classes.button}>
      {!isTextCopied && <CopyIcon className={classes.icon} />}
      {isTextCopied && 'Copied!'}
      {copyError && 'Error!'}
    </ButtonBase>
  )
}

CopyButton.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(CopyButton)
