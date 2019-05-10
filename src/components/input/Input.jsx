import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({ className: classNameProp, value, onChange, identifier }) => {
  return (
    <>
      <div className="zep-form-container">
        <input
          type="text"
          className={classnames(classNameProp, 'zep-input')}
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          id={identifier}
        />
        <label className="zep-form-container__label" htmlFor={identifier}>
          Input Field
        </label>
      </div>
    </>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
  identifier: PropTypes.string,
}

export default Input
