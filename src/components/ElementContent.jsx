import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Tabs from './tabs/Tabs'
import Tab from './tabs/Tab'
import ElementPreview from './ElementPreview'

const styles = {
  tabs: {
    marginBottom: 45,
  },
}

function ElementContent({ element, code, classes }) {
  const [value, setValue] = useState(0)

  function handleClick(event, newValue) {
    setValue(newValue)
  }

  return (
    <Fragment>
      <Tabs value={value} onClick={handleClick} className={classes.tabs}>
        <Tab label="code" />
        <Tab label="styles" />
      </Tabs>
      {value === 0 && <ElementPreview element={element} code={code} />}
      {value === 1 && <p>style section</p>}
    </Fragment>
  )
}

ElementContent.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementContent)
