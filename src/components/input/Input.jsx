import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({ className: classNameProp, startValue, value, onChange }) => {
  return (
    <input
      className={classnames(classNameProp, 'zep-input')}
      value={value}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
}

export default Input
