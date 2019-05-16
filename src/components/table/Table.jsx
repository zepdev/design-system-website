import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Table({ children, title, className: classNameProp }) {
  return (
    <table className={classnames('zep-table', classNameProp)}>
      <caption className="zep-visually-hidden">{title}</caption>
      {children}
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Table
