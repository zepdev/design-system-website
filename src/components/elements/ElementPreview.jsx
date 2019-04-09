import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Headline from '../typography/Headline'
import CodeBlock from '../code/CodeBlock'
import CodeUsage from '../code/CodeUsage'
import elements from '../../data/elements'

const styles = theme => ({
  htmlContainer: {
    backgroundColor: theme.colors.gray.grayLightest.hex,
    padding: `${ theme.spacing.component.l.rem }rem`,
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
    paddingBottom: `${ theme.spacing.component.l.rem }rem`,
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
    <>
      {Object.keys(elements[element].demo).map((elem, idx) => (
        <Fragment key={`codeBlock${ idx }`}>
          <Headline variant="sm">{elem}</Headline>
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
    </>
  )
}

ElementPreview.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementPreview)
