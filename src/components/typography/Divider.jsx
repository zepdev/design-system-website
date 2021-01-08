import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  hr: {
    marginBottom: `${theme.space.xxl.rem}rem`,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    marginTop: 0,
  },
}))

const Divider = () => {
  const classes = useStyles()
  return <hr className={classes.hr} />
}
export default Divider
