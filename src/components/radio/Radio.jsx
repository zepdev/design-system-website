import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Radio = ({ checked, onChange, value, name, label, className: classNameProp }) => (
  <label className={classnames('zep-radio', classNameProp)}>
    <input
      type="radio"
      name={name}
      className="zep-radio__input"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <span className="zep-radio__indicator" />
    <span className="zep-radio__label">{label || name}</span>
  </label>
)

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Radio
