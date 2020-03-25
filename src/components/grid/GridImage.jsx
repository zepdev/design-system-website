import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import img from '../../assets/images/grid.png'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  img: {
    width: 350,
    [theme.breakpoints.up('m')]: {
      width: 550,
    },
  },
}))

const GridImage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={img} alt="grid" className={classes.img} />
    </div>
  )
}

GridImage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default GridImage
