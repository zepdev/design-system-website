import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { createUseStyles, useTheme } from 'react-jss'
import ButtonBase from '../button/ButtonBase'
import CopyIcon from '../icons/CopyIcon'

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '48%',
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  button: {
    height: '6rem',
    width: '100%',
    marginBottom: theme.spacing.component.s.px,
    position: 'relative',
    cursor: 'pointer',
    border: `1px solid ${ theme.color.gray.grayMid.hex }`,
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
  [`@media (min-width: ${ theme.breakpoint.s })`]: {
    root: {
      flexBasis: '22%',
    },
    button: {
      height: '6rem',
    },
  },
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    root: {
      marginRight: `${ theme.spacing.component.m.rem }rem`,
    },
  },
  [`@media (min-width: ${ theme.breakpoint.xxl })`]: {
    root: {
      marginRight: `${ theme.spacing.component.m.rem }rem`,
      flexBasis: '16%',
    },
    button: {
      height: '8rem',
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.color.gray.grayDark.hex,
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
    color: theme.color.gray.white.hex,
  },
  icon: {
    color: theme.color.gray.white.hex,
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
    color: theme.color.gray.grayLight.hex,
    textTransform: 'uppercase',
  },
  name: {
    marginTop: 0,
    fontWeight: 500,
    marginBottom: theme.spacing.component.s.px,
  },
}))

function Swatch({ variant, color, ...props }) {
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

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
