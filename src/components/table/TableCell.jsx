import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function TableCell({ children, component, className: classNameProp, ...props }) {
  const Component = component || 'td'
  return (
    <Component className={classnames('zep-table__cell', classNameProp)} {...props}>
      {children}
    </Component>
  )
}

TableCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  component: PropTypes.oneOf(['th', 'td']),
}

export default TableCell
