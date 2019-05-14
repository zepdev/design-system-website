import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import { Link } from 'gatsby'

const styles = theme => ({
  root: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    flexBasis: '50%',
  },
})

const DocumentLink = ({ text, to, classes }) => {
  return (
    <div className={classes.root}>
      <Link to={to} className={classnames('zep-button zep-button-primary', classes.link)}>
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
