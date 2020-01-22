import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import { Link } from 'gatsby'

const styles = theme => ({
  root: {
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
  },
})

const DocumentLink = ({ text, to, classes }) => {
  return (
    <div className={classes.root}>
      <Link to={to} className="zep-button zep-button-primary">
        <span className="zep-button__text">{text}</span>
      </Link>
    </div>
  )
}

DocumentLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}

export default withStyles(styles)(DocumentLink)
