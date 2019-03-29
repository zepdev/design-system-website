import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import CodeBlock from './code/CodeBlock'
import CodeUsage from './code/CodeUsage'
import elements from '../data/elements'

const styles = theme => ({
  text: {
    marginBottom: `${ theme.spacing.xl.rem }rem`,
    textTransform: 'capitalize',
  },
  htmlContainer: {
    backgroundColor: theme.colors.gray.grayLightest.hex,
    padding: `${ theme.spacing.l.rem }rem`,
    display: 'flex',
    justifyContent: 'center',
  },
  innerContainer: {
    flexBasis: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
  },
  element: {
    paddingBottom: `${ theme.spacing.l.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoints.s })`]: {
    element: {
      paddingBottom: 0,
    },
    innerContainer: {
      flexWrap: 'nowrap',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.m })`]: {
    innerContainer: {
      flexBasis: '80%',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.l })`]: {
    innerContainer: {
      flexBasis: '70%',
    },
  },
  [`@media (min-width: ${ theme.breakpoints.xl })`]: {
    innerContainer: {
      flexBasis: '40%',
    },
  },
})

const ElementPreview = ({ element, classes }) => {
  return (
    <Fragment>
      {' '}
      {Object.keys(elements[element].demo).map((elem, idx) => (
        <Fragment key={`codeBlock${ idx }`}>
          <p
            className={classnames(classes.text, 'zep-typo--normal-6')}
            data-testid="elementPreviewText"
          >
            {elem}
          </p>
          <div className={classes.htmlContainer}>
            <div className={classes.innerContainer}>
              {elements[element].demo[elem].js.map((item, idx) => (
                <div
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={`preview ${ idx }`}
                  className={classes.element}
                />
              ))}
            </div>
          </div>
          <CodeBlock>{elements[element].demo[elem].js.join('\n')}</CodeBlock>
          <CodeUsage element={element} />
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
