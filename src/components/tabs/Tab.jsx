import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    flexBasis: '20%',
    '&:hover': {
      borderBottom: `2px solid ${ theme.colors.purple }`,
      '& $label': {
        color: theme.colors.grey1,
      },
    },
    '&$selected': {
      borderBottom: `2px solid ${ theme.colors.purple }`,
    },
  },
  label: {
    color: theme.colors.grey3,
    '&$selected': {
      color: theme.colors.grey1,
    },
  },
  selected: {},
})

class Tab extends Component {
  render() {
    const { className: classNameProp, label, onClick, value, selected, classes } = this.props

    return (
      <button
        classNames={classnames(classes.root, classNameProp, { [classes.selected]: selected })}
        onClick={() => onClick(value)}
      >
        <p classNames={classes.label}>{label}</p>
      </button>
    )
  }
}

Tab.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
  selected: PropTypes.bool,
}

export default withStyles(styles)(Tab)
