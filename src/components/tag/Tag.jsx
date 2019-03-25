import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
  },
})

class Tag extends Component {
  render() {
    const { className: classNameProp, classes } = this.props

    return (
      <span
        className={classnames(classes.root, classNameProp, 'zep-tag', {
        })}
      >
      </span>
    )
  }
}

Tag.propTypes = {
  classes: PropTypes.object.isRequired,
}

Tag.defaultProps = {
  color: 'primary',
}

export default withStyles(styles)(Tag)
