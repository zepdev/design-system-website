import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ButtonBase from '../button/ButtonBase'
import DownloadIcon from '../icons/DownloadIcon'
import sketchImg from '../../assets/images/sketch-symbol.svg'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.component.l.rem * 2 }rem`,
    background: theme.colors.gray.grayLighter.hex,
    padding: `${ theme.spacing.component.l.rem }rem`,
    width: '100%',
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    root: {
      width: 320,
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      width: 450,
      marginRight: `${ theme.spacing.component.l.rem }rem`,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: `${ theme.spacing.component.xl.rem * 2 }rem`,
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
    padding: `${ theme.spacing.component.xs.rem }rem`,
  },
  icon: {
    color: theme.colors.gray.grayLight.hex,
  },
})

const DownloadFile = ({ title, sketch, href, download, ariaLabel, demo, classes }) => {
  const handleDownload = () => {
    const a = document.createElement('a')
    // check if browser supports modern features like download
    if (a.download === undefined) {
      // workaround for IE
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        const blob = new Blob([href], { type: 'application/octet-stream' })
        window.navigator.msSaveBlob(blob, download)
      } else {
        console.log('error: this browser does not support downloads')
      }
    } else {
      a.href = href
      a.download = download
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  return (
    <div className={classes.root}>
      <p className={classnames('zep-typo--normal-3', classes.text)}>
        {sketch ? `Sketch ${ title }` : title}
      </p>
      <div
        className={classnames(classes.container, {
          [classes.iconContainer]: sketch,
        })}
      >
        {sketch && <img src={sketchImg} alt="sketch logo" className={classes.img} />}
        <ButtonBase
          className={classes.button}
          disabled={demo}
          onClick={() => handleDownload()}
          aria-label={ariaLabel}
          data-testid="downloadButton"
        >
          <DownloadIcon className={classes.icon} />
        </ButtonBase>
      </div>
    </div>
  )
}

DownloadFile.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  sketch: PropTypes.bool,
  href: PropTypes.string,
  download: PropTypes.string,
  ariaLabel: PropTypes.string,
  demo: PropTypes.bool,
}

export default withStyles(styles)(DownloadFile)
