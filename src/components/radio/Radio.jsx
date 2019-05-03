import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Radio = ({ checked, onChange, value, name, className: classNameProp }) => (
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
    <span className="zep-radio__label">{name}</span>
  </label>
)

Radio.propTypes = {
  className: PropTypes.object,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Radio
