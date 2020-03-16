import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import image1 from '../../assets/images/sketch_button.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.global.lightGray,
    padding: `${ theme.space.xxl.rem }rem`,
  },
}))

const Structure = ({ element }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={element === 'button' ? image1 : null} />
    </div>
  )
}

Structure.propTypes = {
  element: PropTypes.string.isRequired,
}
export default Structure
