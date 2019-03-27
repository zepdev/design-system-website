import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import image1 from '../../assets/images/sketch_button.png'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray.grayLighter.hex,
    padding: `${ theme.spacing.xxl.rem }rem`,
  },
})

const Structure = ({ element, classes }) => {
  return (
    <div className={classes.root}>
      <img src={image1} />
    </div>
  )
}

Structure.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}
export default withStyles(styles)(Structure)
