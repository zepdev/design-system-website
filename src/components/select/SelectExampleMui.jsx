import React, { useState } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

function SelectExampleMui() {
  const [value, setValue] = useState('value 1')
  const searchItems = ['value 1', 'value 2', 'value 3']

  return (
    <div>
      <Select
        labelId="demo-mui-example"
        id="mui-example"
        value={value}
        variant="outlined"
        style={{ width: 300, borderRadius: 0 }}
        onChange={e => setValue(e.target.value)}
      >
        {searchItems.map(elem => (
          <MenuItem value={elem} key={`menuItem${elem}`}>
            {elem}
          </MenuItem>
        ))}
      </Select>
      <p style={{ padding: 30 }}>You Selected: {value}</p>
    </div>
  )
}

export default SelectExampleMui
