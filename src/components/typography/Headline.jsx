import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
    textTransform: 'capitalize',
  },
})

const Headline = ({ variant, children, classes }) => (
  <p
    className={classnames(classes.text, {
      'zep-typo--normal-6': variant === 'md',
      'zep-typo--normal-4': variant === 'sm',
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
