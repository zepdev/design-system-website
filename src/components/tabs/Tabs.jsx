import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    background: theme.colors.grayLightest.hex,
  },
})

class Tabs extends Component {
  render() {
    const { className: classNameProp, children: childrenProp, onClick, value, classes } = this.props
    this.valueToIndex = new Map()
    let childIndex = 0
    const children = React.Children.map(childrenProp, child => {
      if (!React.isValidElement(child)) {
        return null
      }
      const childValue = child.props.value === undefined ? childIndex : child.props.value
      this.valueToIndex.set(childValue, childIndex)
      const selected = childValue === value

      childIndex += 1
      return React.cloneElement(child, {
        selected,
        onClick,
        value: childValue,
      })
    })
    return <div className={classnames(classes.root, classNameProp)}>{children}</div>
  }
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.number,
}

export default withStyles(styles)(Tabs)
