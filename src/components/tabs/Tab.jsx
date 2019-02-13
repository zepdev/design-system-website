import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    flexBasis: '20%',
    '&:hover': {
      borderBottom: `2px solid ${ theme.colors.indigoBlue.hex }`,
      '& $label': {
        color: theme.colors.grayDark.hex,
      },
    },
    '&$selected': {
      borderBottom: `2px solid ${ theme.colors.indigoBlue.hex }`,
    },
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.colors.gray.hex,
    '&$selected': {
      color: theme.colors.grayDark.hex,
    },
  },
  selected: {},
})

class Tab extends Component {
  render() {
    const { className: classNameProp, label, onClick, value, selected, classes } = this.props

    return (
      <button
        className={classnames(classes.root, classNameProp, 'zep-button', {
          [classes.selected]: selected,
        })}
        onClick={e => onClick(e, value)}
      >
        <p className={classnames(classes.label, { [classes.selected]: selected })}>{label}</p>
      </button>
    )
  }
}

Tab.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
  selected: PropTypes.bool,
}

export default withStyles(styles)(Tab)
