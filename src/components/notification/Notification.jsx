import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const Notification = ({ className: classNameProp, children }) => {
  return (
    <div className={clsx("zep-notification", classNameProp)}>{children}</div>
  )
}

Notification.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
}

export default Notification
