import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `${ theme.space.xxl.rem }rem`,
    width: 230,
  },
}))

const DocumentLink = ({ text, to }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Link to={to} className="zep-button zep-button-primary zep-button--full">
        <span className="zep-button__text">{text}</span>
      </Link>
    </div>
  )
}

DocumentLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
}

export default DocumentLink
