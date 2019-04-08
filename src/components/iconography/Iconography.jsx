import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'
import ButtonBase from '../button/ButtonBase'
import DownloadIcon from '../icons/DownloadIcon'
import { iconography } from '../../data/elements'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    width: '50%',
    position: 'relative',
    background: theme.colors.gray.grayMid.hex,
    padding: 0,
    border: `1px solid ${ theme.colors.gray.white.hex }`,
    textAlign: 'center',
    '&:hover, &:focus': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.9,
      },
      '& $backdropContent': {
        opacity: 1,
      },
    },
    '&:after': {
      content: "''",
      display: 'block',
      paddingBottom: '100%',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    container: {
      width: '25%',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    container: {
      width: '16.6%',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    container: {
      width: '12.5%',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xxl })`]: {
    container: {
      width: '8.3%',
    },
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.primary.indigoBlue.hex,
    opacity: 0,
    transition: 0.5,
    zIndex: 1,
  },
  backdropContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    color: theme.colors.gray.white.hex,
  },
  icon: {
    color: theme.colors.gray.white.hex,
    zIndex: 2,
  },
  content: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: `${ theme.spacing.s.rem }rem`,
  },
  text: {
    textAlign: 'left',
    fontSize: 12,
  },
  img: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -16,
    marginLeft: -16,
  },
})

const Iconography = ({ section, classes }) => {
  const icon = 'IconsMiscActionBell'

  return (
    <div className={classes.root}>
      {iconography[section].map(elem => (
        <ButtonBase
          className={classes.container}
          key={`icon${ elem }`}
          target="_blank"
          href={require(`../../assets/icons/${ icon }.svg`)}
          download={`zepicons-${ elem }.svg`}
          aria-label={elem}
        >
          <div className={classes.content}>
            <span className={classes.backdrop} />
            <span className={classes.backdropContent}>
              <DownloadIcon className={classes.icon} ariaLabel="download" />
            </span>
            <p className={classnames(classes.text, 'zep-typo--normal-1')}>{`zepicons-${ elem }`}</p>
            <img
              src={require(`../../assets/icons/${ icon }.svg`)}
              alt={elem}
              className={classes.img}
            />
          </div>
        </ButtonBase>
      ))}
    </div>
  )
}

Iconography.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
}

export default withStyles(styles)(Iconography)
