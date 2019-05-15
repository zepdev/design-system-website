import React from 'react'
import PropTypes from 'prop-types'

const Select = () => {
  return (
    <div className="zep-form-container">
      <select className="zep-input">
        <option value="a">option A</option>
        <option value="b">option B</option>
        <option value="c">option C</option>
      </select>
    </div>
  )
}

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}
export default Select
