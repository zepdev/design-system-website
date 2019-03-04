import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    marginBottom: 60,
    padding: 60,
  },
  code: {
    color: theme.colors.gray.white.hex,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

function Code({ code, classes }) {
  return (
    <div className={classes.root} data-testid="code">
      <script className={classes.code} dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  )
}

Code.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.string,
}

export default withStyles(styles)(Code)
