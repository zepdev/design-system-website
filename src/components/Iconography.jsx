import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import elements from '../data/elements'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    padding: `${ theme.spacing.m.rem }rem`,
    marginRight: `${ theme.spacing.m.rem }rem`,
    textAlign: 'center',
  },
  img: {
    width: 32,
    height: 32,
    marginBottom: `${ theme.spacing.m.rem }rem`,
  },
})

const Iconography = ({ classes }) => {
  return (
    <div className={classes.root}>
      {Object.keys(elements.iconography).map(elem => (
        <div className={classes.container} key={`icon${ elements.iconography[elem].title }`}>
          <img
            src={elements.iconography[elem].src}
            alt={elements.iconography[elem].title}
            className={classes.img}
          />
          <p className="zep-typo-normal-3">{elements.iconography[elem].title}</p>
        </div>
      ))}
    </div>
  )
}

Iconography.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Iconography)
