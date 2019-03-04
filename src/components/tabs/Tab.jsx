import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    flexBasis: '20%',
    '&:hover': {
      borderBottom: `2px solid ${ theme.colors.primary.indigoBlue.hex }`,
      '& $labelPrimary': {
        color: theme.colors.gray.grayDark.hex,
      },
      '& $labelSecondary': {
        color: theme.colors.gray.grayLight.hex,
      },
    },
    '&$selected': {
      borderBottom: `2px solid ${ theme.colors.primary.indigoBlue.hex }`,
    },
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  labelPrimary: {
    color: theme.colors.gray.hex,
    '&$selected': {
      color: theme.colors.gray.grayDark.hex,
    },
  },
  labelSecondary: {
    color: theme.colors.gray.white.hex,
    '&$selected': {
      color: theme.colors.gray.grayMid.hex,
    },
  },
  selected: {},
})

class Tab extends Component {
  render() {
    const { className: classNameProp, label, color, onClick, value, selected, classes } = this.props

    return (
      <button
        className={classnames(classes.root, classNameProp, 'zep-button', {
          [classes.selected]: selected,
        })}
        onClick={e => onClick(e, value)}
      >
        <p
          className={classnames(classes.label, {
            [classes.selected]: selected,
            [classes.labelPrimary]: color === 'primary',
            [classes.labelSecondary]: color === 'secondary',
          })}
        >
          {label}
        </p>
      </button>
    )
  }
}

Tab.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  value: PropTypes.number,
  selected: PropTypes.bool,
}

Tab.defaultProps = {
  color: 'primary',
}

export default withStyles(styles)(Tab)
