import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Swatch from './Swatch'
import { colors } from 'zeppelin-element-library/bundle/themes/theme.json'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl.px,
  },
})

function Colors({ section, classes }) {
  return (
    <div className={classes.root}>
      {Object.keys(colors[section]).map((elem, idx) => (
        <Swatch color={colors[section][elem]} section={section} key={`swatch${ idx }`} />
      ))}
    </div>
  )
}

Swatch.propTypes = {
  classes: PropTypes.object,
  section: PropTypes.string.isRequired,
}

export default withStyles(styles)(Colors)
