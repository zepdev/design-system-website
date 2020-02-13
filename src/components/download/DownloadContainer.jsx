import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  [`@media (min-width: ${ theme.breakpoint.l })`]: {
    root: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
    },
  },
}))

const DownloadContainer = ({ children, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return <div className={classes.root}>{children}</div>
}

DownloadContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default DownloadContainer
