import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

let useStyles = createUseStyles(theme => ({
  hr: {
    marginBottom: ({ theme }) => `${theme.spacing.component.xxl.rem}rem`,
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: 0,
  },
}))

const Divider = ({ ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return <hr className={classes.hr} />
}
export default Divider
