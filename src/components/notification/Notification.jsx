import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Notification = ({ className: classNameProp, children }) => {
  return <div className={classnames('zep-notification', classNameProp)}>{children}</div>
}

Notification.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
}

export default Notification
