import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import ElementPreview from './ElementPreview'
import ElementUsage from './ElementUsage'

const useStyles = createUseStyles(theme => ({
  tabs: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
    textTransform: 'capitalize',
  },
}))

const ElementLayout = ({ element, ...props }) => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  function handleChange(newValue) {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onClick={handleChange} className={classes.tabs}>
        <Tab label="Code" />
        <Tab label="Usage" />
      </Tabs>
      {value === 0 && (
        <ElementPreview element={element} role="tabpanel" tabIndex="0" />
      )}
      {value === 1 && (
        <ElementUsage element={element} role="tabpanel" tabIndex="0" />
      )}
    </>
  )
}

ElementLayout.propTypes = {
  element: PropTypes.string.isRequired,
}

export default ElementLayout
