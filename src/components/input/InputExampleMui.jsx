import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  green: {
    borderRadius: 0,
  },
}))

function InputExampleMui() {
  const classes = useStyles()
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
