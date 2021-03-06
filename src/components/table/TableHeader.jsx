import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

function TableHeader({ children: childrenProp, className: classNameProp }) {
  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null
    }
    return React.cloneElement(child, {
      className: clsx("zep-table__cell--header", child.props.className),
      scope: "col",
      component: "th",
    })
  })

  return (
    <thead>
      <tr
        className={clsx("zep-table__row zep-table__row--header", classNameProp)}
      >
        {children}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  className: PropTypes.string,
}

export default TableHeader
