import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const Spinner = ({ className: classNameProp, inverted, size, ...other }) => {
  return (
    <div
      className={clsx(
        "zep-spinner",
        {
          "zep-spinner--medium": size === "medium",
          "zep-spinner--large": size === "large",
          "zep-spinner--invert": inverted === true,
        },
        classNameProp
      )}
      {...other}
    >
      <svg viewBox="0 0 24 24">
        <circle className="stroke" cx="12" cy="12" r="9.38" />
      </svg>
    </div>
  )
}

Spinner.propTypes = {
  inverted: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
}

export default Spinner
