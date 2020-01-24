import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import image1 from '../../assets/images/sketch_button.png'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.gray.grayLighter.hex,
    padding: `${ theme.spacing.component.xxl.rem }rem`,
  },
})

const Structure = ({ element, classes }) => {
  return (
    <div className={classes.root}>
      <img src={element === 'button' ? image1 : null} />
    </div>
  )
}

Structure.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}
export default withStyles(styles)(Structure)
