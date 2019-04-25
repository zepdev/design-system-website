import React, { useState } from 'react'
import Input from '../input/Input'

function NumberInput() {
  const [count, setCount] = useState(0)

  const onChangeFunction = function(event) {
    setCount(parseInt(event.target.value, 10))
  }

  return (
    <>
      {/* TODO: Refactor this to <ButtonBase/> */}
      <button
        className="zep-button zep-button--number-input"
        onClick={() => setCount(count - 1)}
      >
        <span className="zepicons zepicons-minus" aria-label="minus" />
      </button>
      <Input
        type="text"
        className="zep-input zep-input--number"
        value={count}
        onChange={onChangeFunction}
      />
      <button
        className="zep-button zep-button--number-input"
        onClick={() => setCount(count + 1)}
      >
        <span className="zepicons zepicons-plus" aria-label="plus" />
      </button>
    </>
  )
}
export default NumberInput
