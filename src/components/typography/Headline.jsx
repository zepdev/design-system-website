import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  text: {
    marginBottom: `${theme.space.l.rem}rem`,
    textTransform: "capitalize",
  },
}))

const Headline = ({ variant, children }) => {
  const classes = useStyles()
  return (
    <p
      className={clsx(classes.text, {
        "zep-typo--normal-h1": variant === "md",
        "zep-typo--normal-h3": variant === "sm",
      })}
    >
      {children}
    </p>
  )
}

Headline.propTypes = {
  variant: PropTypes.oneOf(["sm", "md"]),
  children: PropTypes.string.isRequired,
}

export default Headline
