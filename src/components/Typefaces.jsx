import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import LaunchIcon from './icons/LaunchIcon'
import theme from '../data/theme'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
    background: theme.colors.gray.grayLight.hex,
  },
  container: {
    flexBasis: '48%',
  },
  teko: {
    fontFamily: 'Teko',
  },
  roboto: {
    fontFamily: 'Roboto',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.colors.gray.grayLighter.hex,
  },
})

const Typefaces = ({ classes }) => (
  <div className={classes.root}>
    {Object.keys(theme.typography.typefaces).map((elem, idx) => (
      <div className={classes.container}>
        <p className={`classes.${ elem }`}>Lorem Ipsum</p>
        <div className={classes.buttonContainer}>
          <p>{elem} Font Family</p>
          <LaunchIcon />
        </div>
      </div>
    ))}
  </div>
)

Typefaces.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
}

export default withStyles(styles)(Typefaces)
