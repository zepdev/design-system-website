import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function TableRow({ children, color, className: classNameProp }) {
  const className = classnames(
    'zep-table__row',
    {
      'zep-table__row--white': color === 'white',
      'zep-table__row--gray': color === 'gray',
    },
    classNameProp
  )

  return <tr className={className}>{children}</tr>
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  color: PropTypes.oneOf(['white', 'gray']),
}

TableRow.defaultProps = {
  color: 'white',
}

export default TableRow
