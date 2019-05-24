import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../input/Input'
import IconButton from '../button/IconButton'
import MinusIcon from '../icons/MinusIcon'
import PlusIcon from '../icons/PlusIcon'

function NumberInput({ label }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <IconButton onClick={() => setCount(count - 1)} data-testid="minus">
        <MinusIcon />
      </IconButton>
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
      <IconButton onClick={() => setCount(count + 1)} data-testid="plus">
        <PlusIcon />
      </IconButton>
    </>
  )
}

NumberInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NumberInput
