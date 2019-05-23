import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import ElementPreview from './ElementPreview'
import ElementUsage from './ElementUsage'

const styles = theme => ({
  tabs: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
    textTransform: 'capitalize',
  },
})

const ElementLayout = ({ element, classes }) => {
  const [value, setValue] = useState(0)

  function handleChange(newValue) {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onClick={handleChange} className={classes.tabs}>
        <Tab label="Code" />
        <Tab label="Usage" />
      </Tabs>
      {value === 0 && <ElementPreview element={element} role="tabpanel" tabIndex="0" />}
      {value === 1 && <ElementUsage element={element} role="tabpanel" tabIndex="0" />}
    </>
  )
}

ElementLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementLayout)
