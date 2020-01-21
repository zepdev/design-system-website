import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from 'react-jss'

const styles = theme => ({
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
    textTransform: 'capitalize',
  },
})

const Headline = ({ variant, children, classes }) => (
  <p
    className={clsx(classes.text, {
      'zep-typo--normal-h1': variant === 'md',
      'zep-typo--normal-h3': variant === 'sm',
    })}
  >
    {children}
  </p>
)

Headline.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.string.isRequired,
}

export default withStyles(styles)(Headline)
