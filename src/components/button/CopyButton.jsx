import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "./ButtonBase"
import CopyIcon from "../icons/CopyIcon"

const useStyles = makeStyles(theme => ({
  button: {
    padding: `${theme.space.m.rem}rem`,
    float: "right",
    color: "#fff",
    height: 52,
    width: 52,
  },
  icon: {
    color: "#fff",
    width: 20,
    height: 20,
  },
}))

function CopyButton({ element }) {
  const [isTextCopied, setTextCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const classes = useStyles()

  function handleCopy() {
    if (document.queryCommandSupported("copy")) {
      const dummy = document.createElement("textarea")
      document.body.appendChild(dummy)
      dummy.value = element
      dummy.select()
      document.execCommand("copy")
      document.body.removeChild(dummy)
      setTextCopied(true)
      setTimeout(() => {
        setTextCopied(false)
      }, 2000)
    } else {
      setCopyError(true)
      setTimeout(() => {
        setCopyError(false)
      }, 2000)
    }
  }

  return (
    <ButtonBase
      data-testid="copyButton"
      onClick={handleCopy}
      className={classes.button}
    >
      {!isTextCopied && <CopyIcon className={classes.icon} />}
      {isTextCopied && "Copied!"}
      {copyError && "Error!"}
    </ButtonBase>
  )
}

CopyButton.propTypes = {
  element: PropTypes.string.isRequired,
}

export default CopyButton
