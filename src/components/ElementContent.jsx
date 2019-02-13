import React, { useState, Fragment } from 'react'
import Tabs from './tabs/Tabs'
import Tab from './tabs/Tab'

function ElementContent() {
  const [value, setValue] = useState(0)

  function handleClick(event, newValue) {
    setValue(newValue)
  }

  return (
    <Fragment>
      <Tabs value={value} onClick={handleClick}>
        <Tab label="code" />
        <Tab label="styles" />
      </Tabs>
      {value === 0 && <p>code section</p>}
      {value === 1 && <p>style section</p>}
    </Fragment>
  )
}

export default ElementContent
