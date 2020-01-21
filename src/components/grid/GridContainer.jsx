import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

function GridContainer({ className: classNameProp, children }) {
  const className = clsx('zep-grid', classNameProp)

  return <div className={className}>{children}</div>
}

GridContainer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default GridContainer
