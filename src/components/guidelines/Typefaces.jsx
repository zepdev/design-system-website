import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import OpenInNewIcon from '../icons/OpenInNewIcon'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  container: {
    flexBasis: '100%',
    paddingBottom: `${ theme.spacing.component.m.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    container: {
      flexBasis: '48%',
      paddingBottom: 0,
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 136,
    background: theme.colors.gray.grayLighter.hex,
  },
  title: {
    fontSize: 28,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.colors.gray.grayLightest.hex,
    paddingTop: theme.spacing.component.s.px,
    paddingBottom: theme.spacing.component.s.px,
    paddingLeft: theme.spacing.component.l.px,
    paddingRight: theme.spacing.component.l.px,
    borderTop: `1px solid ${ theme.colors.gray.grayLight.hex }`,
  },
  text: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  link: {
    color: 'inherit',
    '&:hover': {
      color: theme.colors.primary.indigoBlue.hex,
    },
  },
})

const Typefaces = ({ classes }) => (
  <div className={classes.root}>
    {Object.keys(theme.typography.typefaces).map((elem, idx) => (
      <div className={classes.container} key={`typeface${ idx }`}>
        <div className={classes.titleContainer}>
          <p className={classes.title} style={{ fontFamily: elem }}>
            Lorem Ipsum
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <p className={classes.text}>{elem} Font Family</p>
          <a
            href={`https://fonts.google.com/specimen/${ elem.charAt(0).toUpperCase() +
              elem.slice(1).toLowerCase() }`}
            target="_blank"
            rel="noopener"
            aria-label="Launch"
            className={classes.link}
          >
            <OpenInNewIcon width="24" height="24" />
          </a>
        </div>
      </div>
    ))}
  </div>
)

Typefaces.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Typefaces)
