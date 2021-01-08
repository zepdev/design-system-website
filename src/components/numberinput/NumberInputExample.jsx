import React, { useState } from "react"
import NumberInput from "@zlab-de/zel-react/NumberInput"

function NumberInputExample() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NumberInput
        label="demo number input"
        count={count}
        onChange={value => setCount(value)}
        onMinus={() => setCount(count - 1)}
        onPlus={() => setCount(count + 1)}
      />
    </div>
  )
}

export default NumberInputExample
