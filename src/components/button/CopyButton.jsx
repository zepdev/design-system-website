import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'
import ButtonBase from './ButtonBase'
import CopyIcon from '../icons/CopyIcon'

let useStyles = createUseStyles(theme => ({
  button: {
    padding: `${theme.spacing.component.m.rem}rem`,
    float: 'right',
    color: theme.color.gray.white.hex,
    height: 52,
    width: 52,
  },
  icon: {
    color: theme.color.gray.white.hex,
    width: 20,
    height: 20,
  },
}))

function CopyButton({ element, ...props }) {
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  function handleCopy() {
    if (document.queryCommandSupported('copy')) {
      const dummy = document.createElement('textarea')
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
    <ButtonBase
      data-testid="copyButton"
      onClick={handleCopy}
      className={classes.button}
    >
      {!isTextCopied && <CopyIcon className={classes.icon} />}
      {isTextCopied && 'Copied!'}
      {copyError && 'Error!'}
    </ButtonBase>
  )
}

CopyButton.propTypes = {
  element: PropTypes.string.isRequired,
}

export default CopyButton
