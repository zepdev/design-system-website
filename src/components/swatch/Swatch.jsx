import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '../button/ButtonBase'
import CopyIcon from '../icons/CopyIcon'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '48%',
    marginBottom: `${ theme.space.xxl.rem }rem`,
    [theme.breakpoints.up('s')]: {
      flexBasis: '22%',
    },
    [theme.breakpoints.up('m')]: {
      marginRight: `${ theme.space.m.rem }rem`,
    },
    [theme.breakpoints.up('xxl')]: {
      marginRight: `${ theme.space.m.rem }rem`,
      flexBasis: '16%',
    },
  },
  button: {
    height: '6rem',
    width: '100%',
    marginBottom: theme.space.s.px,
    position: 'relative',
    cursor: 'pointer',
    border: `1px solid ${ theme.color.text.lightGray }`,
    '&:hover, &:focus': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.4,
      },
      '& $backdropContent': {
        opacity: 1,
      },
    },
    [theme.breakpoints.up('s')]: {
      height: '6rem',
    },
    [theme.breakpoints.up('xxl')]: {
      height: '8rem',
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.color.text.darkGray,
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
    color: '#fff',
  },
  icon: {
    color: '#fff',
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
    color: theme.color.text.lightGray,
    textTransform: 'uppercase',
  },
  name: {
    marginTop: 0,
    fontWeight: 500,
    marginBottom: theme.space.s.px,
  },
}))

function Swatch({ variant, color }) {
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const classes = useStyles()

  const handleCopy = color => {
    if (document.queryCommandSupported('copy')) {
      const dummy = document.createElement('textarea')
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
  const colorShown = variant === 'font' ? color : color.hex
  return (
    <div className={classes.root}>
      <ButtonBase
        className={classes.button}
        style={{ background: colorShown }}
        onClick={() => handleCopy(colorShown)}
        data-testid="swatchButton"
      >
        <span className={classes.backdrop} />
        <span className={classes.backdropContent}>
          {!isTextCopied && (
            <CopyIcon
              className={classes.icon}
              ariaLabel={`copy hex:${ colorShown }`}
            />
          )}
          <span
            className={clsx(classes.buttonText, 'zep-typo--normal-h4')}
            data-testid="swatchText"
          >
            {isTextCopied ? 'Copied!' : copyError ? 'Error!' : colorShown}
          </span>
        </span>
      </ButtonBase>

      {variant === 'font' && (
        <p
          className={clsx(classes.text, 'zep-typo--normal-caption')}
        >{`RGB: ${ color }`}</p>
      )}
      <p className={clsx(classes.name, 'zep-typo--normal-body2')}>
        {color.name}
      </p>
      {color.hex && (
        <p
          className={clsx(classes.text, 'zep-typo--normal-caption')}
        >{`HEX: ${ color.hex }`}</p>
      )}
      {color.rgb && (
        <p
          className={clsx(classes.text, 'zep-typo--normal-caption')}
        >{`RGB: ${ color.rgb }`}</p>
      )}
      {color.type && (
        <p
          className={clsx(classes.text, 'zep-typo--normal-caption')}
        >{`Type: ${ color.type }`}</p>
      )}
    </div>
  )
}

Swatch.propTypes = {
  color: PropTypes.object.isRequired,
}

export default Swatch
