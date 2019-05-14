import React from 'react'
import PropTypes from 'prop-types'

function TableBody({ children, className: classNameProp }) {
  return <tbody className={classNameProp}>{children}</tbody>
}

TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
}

export default TableBody
