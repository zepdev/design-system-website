import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
})

const Table = ({ header, data, classes }) => {
  return <div className={classes.root}>table</div>
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
}

export default withStyles(styles)(Table)
