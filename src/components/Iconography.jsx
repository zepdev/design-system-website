import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { iconography } from '../data/elements'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    padding: `${ theme.spacing.m.rem }rem`,
    marginRight: `${ theme.spacing.m.rem }rem`,
  },
  img: {
    width: 32,
    height: 32,
  },
})

const Iconography = ({ classes }) => {
  return (
    <div className={classes.root}>
      {Object.keys(iconography).map((elem, idx) => (
        <div className={classes.container}>
          <img src={elem.src} alt={elem.title} className={classes.img} />
          <p className="zep-typo-normal-3">{elem.title}</p>
        </div>
      ))}
    </div>
  )
}

Iconography.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Iconography)
