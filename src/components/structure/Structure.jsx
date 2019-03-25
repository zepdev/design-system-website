import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import image1 from '../../assets/images/zeppelin_icon.png'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray.grayLighter.hex,
    padding: `${ theme.spacing.xl.rem * 2 }rem`,
  },
})

const Structure = ({ element, classes }) => {
  return (
    <div className={classes.root}>
      <img src={image1} />
      <img src={image1} />
    </div>
  )
}

Structure.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}
export default withStyles(styles)(Structure)
