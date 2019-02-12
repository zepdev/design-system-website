import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Tabs from './tabs/Tabs'
import Tab from './tabs/Tab'

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    background: theme.colors.purple,
    color: theme.colors.white,
    zIndex: 1000,
  },
})

class ElementContent extends Component {
  state = {
    value: 0,
  }

  handleClick = value => {
    this.setState({
      value,
    })
  }

  render() {
    // const { element, classes } = this.props
    const { value } = this.state

    return (
      <Tabs value={value} onClick={this.handleClick}>
        <Tab label="code" />
        <Tab label="styles" />
      </Tabs>
    )
  }
}

ElementContent.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementContent)
