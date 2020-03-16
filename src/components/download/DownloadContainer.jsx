import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('l')]: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
    },
  },
}))

const DownloadContainer = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

DownloadContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default DownloadContainer
