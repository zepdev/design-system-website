import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '../button/IconButton'
import MinusIcon from '../icons/MinusIcon'
import PlusIcon from '../icons/PlusIcon'

function NumberInput({ label }) {
  const [count, setCount] = useState(0)

  const handleChange = event => {
    const value = parseInt(event.target.value, 10)
    const count = isNaN(value) ? 0 : value
    setCount(count)
  }

  return (
    <div className="zep-numberinput">
      <IconButton onClick={() => setCount(count - 1)} data-testid="minus">
        <MinusIcon />
      </IconButton>
      <label className="zep-visually-hidden" htmlFor={`numberInput_${ label }`}>
        {label}
      </label>
      <input
        type="text"
        id={`numberInput_${ label }`}
        className="zep-input zep-input--number"
        value={count}
        onChange={e => handleChange(e)}
      />
      <IconButton onClick={() => setCount(count + 1)} data-testid="plus">
        <PlusIcon />
      </IconButton>
    </div>
  )
}

NumberInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NumberInput
