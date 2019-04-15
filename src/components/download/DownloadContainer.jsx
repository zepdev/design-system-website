import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    root: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
    },
  },
})

const DownloadContainer = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>
}

DownloadContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default withStyles(styles)(DownloadContainer)
