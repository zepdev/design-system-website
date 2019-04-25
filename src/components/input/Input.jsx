import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({ className: classNameProp, startValue, value }) => {
  return (
    <input
      className={classnames(classNameProp, 'zep-input')}
      defaultValue={startValue}
      value={value}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  startValue: PropTypes.number,
  value: PropTypes.number,
}

export default Input
