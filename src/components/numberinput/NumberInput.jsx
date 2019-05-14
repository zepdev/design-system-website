import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../input/Input'

function NumberInput({ label }) {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* TODO: Refactor this to <ButtonBase/> */}
      <button className="zep-button zep-button--number-input" onClick={() => setCount(count - 1)}>
        <span className="zepicons zepicons-minus" aria-label="minus" />
      </button>
      <label className="zep-visually-hidden" htmlFor={`numberInput_${ label }`}>
        {label}
      </label>
      <Input
        type="text"
        id={`numberInput_${ label }`}
        className="zep-input zep-input--number"
        value={count}
        onChange={e => setCount(parseInt(e.target.value, 10))}
      />
      <button className="zep-button zep-button--number-input" onClick={() => setCount(count + 1)}>
        <span className="zepicons zepicons-plus" aria-label="plus" />
      </button>
    </>
  )
}

NumberInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NumberInput
