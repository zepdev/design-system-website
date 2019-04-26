import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ label, disabled }) => {
  const [isChecked, setCheckbox] = useState(false)

  const handleChange = event => {
    setCheckbox(event.target.checked)
  }

  return (
    <div className="zep-checkbox">
      <input
        className="zep-checkbox__input"
        type="checkbox"
        id={`checkbox_${ label }`}
        checked={disabled ? null : isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label className="zep-checkbox__label" htmlFor={`checkbox_${ label }`}>
        {label}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

export default Checkbox
