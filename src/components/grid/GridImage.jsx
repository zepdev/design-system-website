import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import img from '../../assets/images/grid.png'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  img: {
    width: 350,
  },
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    img: {
      width: 550,
    },
  },
})

const GridImage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img src={img} alt="grid" className={classes.img} />
    </div>
  )
}

GridImage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GridImage)
