import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
  },
})

class Textarea extends Component {
  render() {
    const { className: classNameProp, classes } = this.props

    return (
      <textarea
        className={classnames(classes.root, classNameProp, 'zep-textarea', {
        })}
      >
      </textarea>
    )
  }
}

Textarea.propTypes = {
  classes: PropTypes.object.isRequired,
}

Textarea.defaultProps = {
  color: 'primary',
}

export default withStyles(styles)(Textarea)
