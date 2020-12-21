import React from "react"
import TextField from "@material-ui/core/TextField"

function InputExampleMui() {
  return (
    <div>
      <TextField
        id="outlined"
        label="Input"
        variant="outlined"
        InputProps={{ style: { borderRadius: 0 } }}
      />
    </div>
  )
}

export default InputExampleMui
