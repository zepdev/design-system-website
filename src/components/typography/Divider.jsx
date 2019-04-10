import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  hr: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: 0,
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
})

const Divider = ({ classes }) => <hr className={classes.hr} />

export default withStyles(styles)(Divider)
