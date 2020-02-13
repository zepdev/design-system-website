import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
    textTransform: 'capitalize',
  },
}))

const Headline = ({ variant, children, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return (
    <p
      className={clsx(classes.text, {
        'zep-typo--normal-h1': variant === 'md',
        'zep-typo--normal-h3': variant === 'sm',
      })}
    >
      {children}
    </p>
  )
}

Headline.propTypes = {
  variant: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.string.isRequired,
}

export default Headline
