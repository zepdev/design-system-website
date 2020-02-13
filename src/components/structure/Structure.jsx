import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'
import image1 from '../../assets/images/sketch_button.png'

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.gray.grayLighter.hex,
    padding: `${ theme.spacing.component.xxl.rem }rem`,
  },
}))

const Structure = ({ element, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
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
