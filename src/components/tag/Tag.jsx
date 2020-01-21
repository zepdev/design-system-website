import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Tag = ({ className: classNameProp }) => {
  return (
    <span className={clsx(classNameProp, 'zep-tag')}>
      Tag
      <i className="zepicons zepicons-close" />
    </span>
  )
}

Tag.propTypes = {
  className: PropTypes.object,
}

export default Tag
