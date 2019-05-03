import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Radio = ({ children, className: classNameProp }) => (
  <label className={classnames('zep-radio', classNameProp)}>
    <input type="radio" name="radio" className="zep-radio__input" />
    <span className="zep-radio__indicator" />
    <span className="zep-radio__label">{children}</span>
  </label>
)

Radio.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
}
