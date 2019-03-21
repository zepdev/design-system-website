import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.l.px * 2,
  },
  link: {
    color: theme.colors.gray.white.hex,
    background: theme.colors.primary.indigoBlue.hex,
    padding: '12px 16px',
    cursor: 'pointer',
  },
})

const Download = ({ classes }) => {
  const handleDownload = () => {
    let a = document.createElement('a')
    a.href =
      'https://s3.eu-central-1.amazonaws.com/com.zeppelin.zds.assets/zel/css/zeppelin-element-library.css'
    a.download = item.url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <div className={classes.root}>
      <Button
        className={classes.link}
        color="primary"
        onClick={handleDownload}
        download="zeppelin-element-library.css"
        href="https://s3.eu-central-1.amazonaws.com/com.zeppelin.zds.assets/zel/css/zeppelin-element-library.css"
      >
        Download
      </Button>
    </div>
  )
}

export default withStyles(styles)(Download)
