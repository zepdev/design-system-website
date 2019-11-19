/* eslint-disable max-len */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from 'react-jss'
import ButtonBase from '../button/ButtonBase'
import DownloadIcon from '../icons/DownloadIcon'
import DownloadContainer from '../download/DownloadContainer'
import DownloadFile from '../download/DownloadFile'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import Divider from '../typography/Divider'
import Headline from '../typography/Headline'
import ElementUsage from '../elements/ElementUsage'
import { iconography } from '../../data/elements'

const styles = theme => ({
  tabs: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  text: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
  },
  root: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
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
    padding: `${ theme.spacing.component.s.rem }rem`,
  },
  name: {
    textAlign: 'left',
    fontSize: 12,
    color: theme.colors.gray.black.hex,
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

const Iconography = ({ classes }) => {
  const [value, setValue] = useState(0)

  function handleChange(newValue) {
    setValue(newValue)
  }

  const zelVersion = '0.11.4' // we cannot call from package.json as it is always on next version which is not published to cdn.

  const sections = {
    action: {
      title: 'Action Icons',
    },
    ps: {
      title: 'Strategic Business Units Icons: Power Systems',
    },
    cat: {
      title: 'Strategic Business Units Icons: Zeppelin Cat',
    },
    systems: {
      title: 'Strategic Business Units Icons: Systems',
    },
    rental: {
      title: 'Strategic Business Units Icons: Rental',
    },
    navigation: {
      title: 'Navigation Icons',
    },
    indicator: {
      title: 'Indicator Icons',
    },
    language: {
      title: 'Language Icons',
    },
    social: {
      title: 'Social Icons',
    },
  }

  return (
    <>
      <Tabs value={value} onClick={handleChange} className={classes.tabs}>
        <Tab label="Overview" />
        <Tab label="Usage" />
      </Tabs>
      {value === 0 && (
        <>
          <Headline variant="md">Zeppelin Icons</Headline>
          <p className={clsx(classes.text, 'zep-typo--normal-body1')}>
            Icons can be downloaded as one large file containing all icons
            (Sketch, SVGs, or SVG Sprite) or icons may be downloaded
            individually from below.
          </p>
          <DownloadContainer>
            <DownloadFile
              title="Zeppelin Sketch Library"
              variant="sketch"
              href={`https://cdn-zel.zepdev.net/zel/${ zelVersion }/css/assets/dist/zds-library.sketch`}
              download=""
              ariaLabel="download"
            />
          </DownloadContainer>
          <DownloadContainer>
            <DownloadFile
              title="Zeppelin SVG Icons"
              href={`https://cdn-zel.zepdev.net/zel/${ zelVersion }/css/assets/dist/zepicons.zip`}
              download="zeppelin-iconography-library"
              ariaLabel="download"
            />
            <DownloadFile
              title="Zeppelin SVG Sprite"
              href={`https://cdn-zel.zepdev.net/zel/${ zelVersion }/css/assets/dist/zepsprite.zip`}
              download=""
              ariaLabel="download"
            />
          </DownloadContainer>
          <Divider />
          {Object.keys(sections).map(section => (
            <Fragment key={`section${ section }`}>
              <Headline variant="md">{sections[section].title}</Headline>
              <div className={classes.root}>
                {iconography[section].map(elem => (
                  <ButtonBase
                    className={classes.container}
                    key={`icon${ elem }`}
                    target="_blank"
                    href={require(`zeppelin-element-library/bundle/assets/icons/SVG/zepicons-${ elem }.svg`)}
                    download={`zepicons-${ elem }.svg`}
                    aria-label={elem}
                  >
                    <div className={classes.content}>
                      <span className={classes.backdrop} />
                      <span className={classes.backdropContent}>
                        <DownloadIcon
                          className={classes.icon}
                          ariaLabel="download"
                        />
                      </span>
                      <p
                        className={clsx(
                          classes.name,
                          'zep-typo--normal-caption'
                        )}
                      >{`zepicons-${ elem }`}</p>
                      <img
                        src={require(`zeppelin-element-library/bundle/assets/icons/SVG/zepicons-${ elem }.svg`)}
                        alt={elem}
                        className={classes.img}
                      />
                    </div>
                  </ButtonBase>
                ))}
              </div>
            </Fragment>
          ))}
        </>
      )}
      {value === 1 && <ElementUsage element="iconography" />}
    </>
  )
}

Iconography.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Iconography)
