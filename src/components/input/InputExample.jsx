import React, { useState } from "react"
import Input from "@zlab-de/zel-react/Input"

function InputExample() {
  const [input, setInput] = useState("")

  return (
    <div>
      <Input
        placeholder="Input"
        id="inputDemo"
        label="demo"
        onChange={e => setInput(e.target.value)}
        value={input}
        error={input === "error"}
        errorMessage={"You have typed in 'error'!"}
      />
    </div>
  )
}

export default InputExample
