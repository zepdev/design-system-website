import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { colors } from '../../data/theme'
import Swatch from './Swatch'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}

function Colors({ classes }) {
  return (
    <div className={classes.root}>
      {Object.keys(colors).map((elem, idx) => (
        <Swatch title={elem} color={colors[elem]} key={`swatch${ idx }`} />
      ))}
    </div>
  )
}

Swatch.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Colors)
