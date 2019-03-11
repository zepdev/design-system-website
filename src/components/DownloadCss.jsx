import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.l * 2,
  },
  link: {
    color: theme.colors.gray.white.hex,
    background: theme.colors.primary.indigoBlue.hex,
    padding: '12px 16px',
    cursor: 'pointer',
  },
})

const Download = ({ classes }) => {
  return (
    <div className={classes.root}>
      <a
        className={classes.link}
        download
        href="https://s3.eu-central-1.amazonaws.com/com.zeppelin.zds.assets//ZEL/zeppelin-element-library.css"
      >
        Download
      </a>
    </div>
  )
}

export default withStyles(styles)(Download)
