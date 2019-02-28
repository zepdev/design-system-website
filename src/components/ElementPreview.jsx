import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import CodeBlock from './CodeBlock'
import elements from '../data/elements'

const styles = theme => ({
  text: {
    marginBottom: 32,
    textTransform: 'capitalize',
    fontSize: 28,
  },
  htmlContainer: {
    backgroundColor: theme.colors.grayLighter.hex,
    padding: 45,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})

const ElementPreview = ({ element, classes }) => {
  return (
    <Fragment>
      {Object.keys(elements[element]).map((elem, idx) => (
        <Fragment key={`codeBlock${ idx }`}>
          <p className={classes.text} data-testid="elementPreviewText">
            {elem}
          </p>
          <div
            className={classes.htmlContainer}
            dangerouslySetInnerHTML={{ __html: elements[element][elem].js }}
          />
          <CodeBlock element={elements[element][elem]} />
        </Fragment>
      ))}
    </Fragment>
  )
}

ElementPreview.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementPreview)
