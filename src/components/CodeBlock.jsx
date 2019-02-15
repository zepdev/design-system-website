import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Code from './Code'
import Tabs from './tabs/Tabs'
import Tab from './tabs/Tab'

const styles = theme => ({
  root: {
    marginBottom: 60,
    background: theme.colors.grayMidDark.hex,
  },
  tabs: {
    borderBottom: `1px solid ${ theme.colors.white.hex }`,
    background: theme.colors.grayMidDark.hex,
    color: theme.colors.white.hex,
  },
})

function CodeBlock({ element, classes }) {
  const [value, setValue] = useState(0)

  function handleClick(event, newValue) {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <Tabs value={value} onClick={handleClick} className={classes.tabs}>
        <Tab label="Vanilla JS" color="secondary" />
        {element.react && <Tab label="React" color="secondary" />}
        {element.angular && <Tab label="Angular" color="secondary" />}
        {element.vue && <Tab label="Vue" color="secondary" />}
      </Tabs>
      <Code code={element.js} />
    </div>
  )
}

CodeBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
}

export default withStyles(styles)(CodeBlock)
