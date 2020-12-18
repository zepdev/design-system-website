import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ButtonBase from '../button/ButtonBase'
import DownloadIcon from '@zlab-de/zel-react-icons/ZepIconEssentialDownload'
import OpenInNewIcon from '../icons/OpenInNewIcon'
import sketchImg from '../../assets/images/sketch-symbol.svg'
import githubImg from '../../assets/images/github.svg'
import npmImg from '../../assets/images/npm.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${theme.space.l.rem * 2}rem`,
    background: theme.status.gray,
    padding: `${theme.space.l.rem}rem`,
    width: '100%',
    [theme.breakpoints.up('s')]: {
      width: 320,
    },
    [theme.breakpoints.up('l')]: {
      width: 450,
      marginRight: `${theme.space.l.rem}rem`,
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
    marginBottom: `${theme.space.xl.rem * 2}rem`,
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
    background: '#fff',
    padding: `${theme.space.xs.rem}rem`,
  },
  icon: {
    color: theme.color.global.lightGray,
  },
}))

const DownloadFile = ({ title, variant, href, download, ariaLabel, demo }) => {
  const classes = useStyles()
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
      <p className={clsx('zep-typo--body-default', classes.text)}>
        {variant === 'sketch' ? `Sketch ${title}` : title}
      </p>
      <div
        className={clsx(classes.container, {
          [classes.iconContainer]: variant !== undefined,
        })}
      >
        {variant === 'sketch' && (
          <img src={sketchImg} alt="sketch logo" className={classes.img} />
        )}
        {variant === 'github' && (
          <img src={githubImg} alt="github logo" className={classes.img} />
        )}
        {variant === 'npm' && (
          <img src={npmImg} alt="github logo" className={classes.img} />
        )}
        <ButtonBase
          className={classes.button}
          disabled={demo}
          onClick={() => handleDownload()}
          aria-label={ariaLabel}
          data-testid="downloadButton"
        >
          {variant === 'npm' && <OpenInNewIcon className={classes.icon} />}
          {variant === 'github' && <OpenInNewIcon className={classes.icon} />}
          {variant === 'sketch' && <DownloadIcon className={classes.icon} />}
          {variant === undefined && <DownloadIcon className={classes.icon} />}
        </ButtonBase>
      </div>
    </div>
  )
}

DownloadFile.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string.isRequired,
  sketch: PropTypes.bool,
  github: PropTypes.bool,
  href: PropTypes.string,
  download: PropTypes.string,
  ariaLabel: PropTypes.string,
  demo: PropTypes.bool,
  variant: PropTypes.oneOf(['sketch', 'npm', 'github']),
}

export default DownloadFile
