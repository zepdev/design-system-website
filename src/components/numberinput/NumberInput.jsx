import React, { useState } from 'react'
import Input from '../input/Input'

function NumberInput() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* TODO: Refactor this to <ButtonBase/> */}
      <button
        className="zep-button zep-button--number-input"
        onClick={() => setCount(count - 1)}
      >
        <span className="zepicons zepicons-minus" ariaLabel="minus" />
      </button>
      <Input
        type="text"
        className="zep-input zep-input--number"
        startValue="1"
        value={count}
      />
      <button
        className="zep-button zep-button--number-input"
        onClick={() => setCount(count + 1)}
      >
        <span className="zepicons zepicons-plus" ariaLabel="plus" />
      </button>
    </>
  )
}
export default NumberInput
