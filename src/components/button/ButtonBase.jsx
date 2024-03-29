import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  button: {
    display: "inline-block",
    margin: 0,
    border: "none",
    outline: "none",
    cursor: "pointer",
    background: "transparent",
    "&:hover, &:focus, &:active, &::focus:not(.focus-visible), &:active:focus":
      {
        backgroundColor: "transparent",
        outline: "none",
      },
  },
}))

// ButtonBase has a link element, however a link should not be used as a button.
// Its function here is only to for styling

function ButtonBase({
  onClick,
  children,
  className: classNameProp,
  fullWidth,
  size,
  disabled,
  href,
  ...other
}) {
  const classes = useStyles()
  const className = clsx(
    classNameProp,
    {
      // eslint-disable-next-line
      "zep-button--full": fullWidth,
      "zep-button--small": size === "small",
    },
    classes.button
  )

  return href ? (
    <a className={className} href={disabled ? null : href} {...other}>
      {children}
    </a>
  ) : (
    <button
      className={className}
      onClick={disabled ? null : onClick}
      {...other}
    >
      {children}
    </button>
  )
}

ButtonBase.propTypes = {
  classes: PropTypes.object,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
}

ButtonBase.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: "large",
}

export default ButtonBase
