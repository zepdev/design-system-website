import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.color.global.white,
  },
}))

const Tabs = ({
  className: classNameProp,
  children: childrenProp,
  onClick,
  ariaLabel,
  value,
  ...props
}) => {
  const classes = useStyles()
  const valueToIndex = new Map()
  let childIndex = 0
  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null
    }
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value
    valueToIndex.set(childValue, childIndex)
    const selected = childValue === value

    childIndex += 1
    return React.cloneElement(child, {
      selected,
      onClick,
      value: childValue,
    })
  })

  return (
    <div
      className={clsx(classes.root, classNameProp, 'zep-tabs')}
      data-testid="tabs"
      role="tablist"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
  ariaLabel: PropTypes.string,
}

export default Tabs
