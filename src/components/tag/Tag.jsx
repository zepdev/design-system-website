import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Tag = ({ className: classNameProp }) => {
  return (
    <span className={classnames(classNameProp, 'zep-tag')}>
      Tag
      <i className="zepicons zepicons-close" />
    </span>
  )
}

Tag.propTypes = {
  className: PropTypes.object,
}

export default Tag
