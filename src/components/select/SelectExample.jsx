import React, { useState } from "react"
import Select from "@zlab-de/zel-react/Select"

function SelectExample() {
  const [value, setValue] = useState({ value: "value 1" })
  const searchItems = [
    { value: "value 1" },
    { value: "value 2" },
    { value: "value 3" },
  ]

  return (
    <div>
      <Select
        onChange={selection => setValue(selection)}
        items={searchItems}
        placeholder="Select one"
        label="Label"
        selectedItem={value}
      />
      <p style={{ padding: 30 }}>You Selected: {value.value}</p>
    </div>
  )
}

export default SelectExample
