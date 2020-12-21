import React, { useState } from "react"
import Checkbox from "@zlab-de/zel-react/Checkbox"

function CheckboxExample() {
  const [state, setState] = useState({
    isCheckedA: true,
    isCheckedB: true,
    isCheckedF: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <form>
      <Checkbox
        label="A"
        isChecked={state.isCheckedA}
        handleChange={handleChange("isCheckedA")}
      />
      <Checkbox
        label="B"
        isChecked={state.isCheckedB}
        handleChange={handleChange("isCheckedB")}
      />
      <Checkbox
        label="C"
        isChecked={state.isCheckedC}
        handleChange={handleChange("isCheckedC")}
      />
    </form>
  )
}
export default CheckboxExample
