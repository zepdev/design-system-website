import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const List = ({ variant: variantProp, className: classNameProp, children: childrenProp }) => {
  const variant = variantProp || 'bullet'
  const children = React.Children.map(childrenProp, child => {
    return React.cloneElement(child, {
      variant,
    })
  })

  return <ul className={classnames('zep-list', classNameProp)}>{children}</ul>
}

List.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
  variant: PropTypes.oneOf(['bullet', 'attribute']),
}

export default List
