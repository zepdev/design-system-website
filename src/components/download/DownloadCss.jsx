import React from 'react'
import withStyles from 'react-jss'
import Button from '../button/Button'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.l.px * 2,
  },
})

const Download = ({ classes }) => {
  // const handleDownload = () => {
  //   let myHeaders = new Headers({
  //     'Content-Type': 'text/css',
  //   })
  //   fetch(
  //     'https://s3.eu-central-1.amazonaws.com/com.zeppelin.zds.assets/zel/css/zeppelin-element-library.css',
  //     {
  //       headers: myHeaders,
  //     }
  //   )
  //     .then(function(response) {
  //       console.log(response.text())
  //       return response.json()
  //     })
  //     .then(function(json) {
  //       console.log(json)
  //     })
  //     .catch(function(err) {
  //       console.log('Fetch problem: ' + err.message)
  //     })
  //   const filename = 'zeppelin-element-library.css'
  // const blob = new Blob([data], { type: 'application/octet-stream' })
  // if (typeof window.navigator.msSaveBlob !== 'undefined') {
  //   // IE workaround for "HTML7007: One or more blob URLs were
  //   // revoked by closing the blob for which they were created.
  //   // These URLs will no longer resolve as the data backing
  //   // the URL has been freed."
  //   window.navigator.msSaveBlob(blob, filename)
  // } else {
  //   let blobURL = window.URL.createObjectURL(blob)
  //   let tempLink = document.createElement('a')
  //   tempLink.style.display = 'none'
  //   tempLink.href = blobURL
  //   tempLink.setAttribute('download', filename)

  //   // Safari thinks _blank anchor are pop ups. We only want to set _blank
  //   // target if the browser does not support the HTML5 download attribute.
  //   // This allows you to download files in desktop safari if pop up blocking
  //   // is enabled.
  //   if (typeof tempLink.download === 'undefined') {
  //     tempLink.setAttribute('target', '_blank')
  //   }

  //   document.body.appendChild(tempLink)
  //   tempLink.click()
  //   document.body.removeChild(tempLink)
  //   window.URL.revokeObjectURL(blobURL)
  // }
  // }
  return (
    <div className={classes.root}>
      <Button
        color="primary"
        // onClick={handleDownload}
        target="_blank"
        href="https://cdn-zel.zepdev.net/zel/css/zeppelin-element-library.css"
        download="zeppelin-element-library.css"
      >
        Download
      </Button>
    </div>
  )
}

export default withStyles(styles)(Download)
