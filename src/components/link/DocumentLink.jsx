import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { createUseStyles, useTheme } from 'react-jss'

let useStyles = createUseStyles(theme => ({
  root: {
    marginBottom: ({ theme }) => `${theme.spacing.component.xxl.rem}rem`,
  },
}))

const DocumentLink = ({ text, to, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
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

export default DocumentLink
