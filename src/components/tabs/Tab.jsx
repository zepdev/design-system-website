import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'
import ButtonBase from '../button/ButtonBase'

const styles = theme => ({
  root: {
    fontSize: '100%',
    font: 'inherit',
    paddingTop: `${ theme.spacing.component.s.rem }rem`,
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
  normal: {
    flexBasis: '20%',
  },
  fullWidth: {
    flexBasis: '100%',
  },
  label: {
    textAlign: 'center',
  },
  labelPrimary: {
    color: theme.colors.gray.grayLight.hex,
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

const Tab = ({
  className: classNameProp,
  label,
  fullWidth,
  color,
  onClick,
  value,
  selected,
  classes,
}) => {
  return (
    <ButtonBase
      className={classnames(classes.root, classNameProp, {
        [classes.selected]: selected,
        [classes.normal]: !fullWidth,
        [classes.fullWidth]: fullWidth,
      })}
      onClick={e => onClick(e, value)}
    >
      <p
        className={classnames(
          classes.label,
          {
            [classes.selected]: selected,
            [classes.labelPrimary]: color === 'primary',
            [classes.labelSecondary]: color === 'secondary',
          },
          'zep-typo--normal-4'
        )}
      >
        {label}
      </p>
    </ButtonBase>
  )
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
