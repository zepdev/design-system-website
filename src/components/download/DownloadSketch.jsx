import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ButtonBase from '../button/ButtonBase'
import DownloadIcon from '../icons/DownloadIcon'
import sketchImg from '../../assets/images/sketch-symbol.svg'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.l.rem * 2 }rem`,
    background: theme.colors.gray.grayLighter.hex,
    padding: `${ theme.spacing.l.rem }rem`,
    flexBasis: '40%',
  },
  fixedWidth: {
    width: '100%',
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    fixedWidth: {
      width: 350,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: `${ theme.spacing.xl.rem * 2 }rem`,
  },
  trademark: {
    marginBottom: 5,
    textTransform: 'capitalize',
    fontSize: 10,
  },
  img: {
    width: 46,
    height: 46,
  },
  button: {
    width: 46,
    height: 46,
    background: theme.colors.gray.white.hex,
    padding: `${ theme.spacing.xs.rem }rem`,
  },
  icon: {
    color: theme.colors.gray.grayLight.hex,
  },
})

const DownloadSketch = ({ demo, classes }) => {
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
    <div
      className={classnames(classes.root, {
        [classes.fixedWidth]: demo,
      })}
    >
      <p className={classnames('zep-typo--normal-3', classes.text)}>
        Color palettes for Sketch <sup className={classes.trademark}>TM</sup>
      </p>
      <div className={classes.container}>
        <img src={sketchImg} alt="sketch logo" className={classes.img} />
        <ButtonBase
          // onClick={handleDownload}
          className={classes.button}
          disabled={demo}
          target="_blank"
          href="https://s3.eu-central-1.amazonaws.com/com.zeppelin.zds.assets/zel/css/zeppelin-element-library.css"
          download="zeppelin-element-library.css"
          aria-label="download sketch file"
        >
          <DownloadIcon className={classes.icon} />
        </ButtonBase>
      </div>
    </div>
  )
}

export default withStyles(styles)(DownloadSketch)
