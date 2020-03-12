import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import ElementPreview from './ElementPreview'
import ElementUsage from './ElementUsage'

const useStyles = makeStyles(theme => ({
  tabs: {
    marginBottom: `${ theme.space.xxl.rem }rem`,
    background: theme.status.gray,
  },
  text: {
    marginBottom: `${ theme.space.l.rem }rem`,
    textTransform: 'capitalize',
  },
}))

const ElementLayout = ({ element }) => {
  const [value, setValue] = useState(0)

  const classes = useStyles()

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
