import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Headline from '../typography/Headline'
import CodeBlock from '../code/CodeBlock'
import CodeUsage from '../code/CodeUsage'
import elements from '../../data/elements'

const styles = theme => ({
  htmlContainer: {
    backgroundColor: theme.color.gray.grayLightest.hex,
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
  innerContainerFull: {
    flexBasis: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  element: {
    paddingBottom: `${ theme.spacing.component.l.rem }rem`,
  },
  [`@media (min-width: ${ theme.breakpoint.s })`]: {
    element: {
      paddingBottom: 0,
    },
    innerContainer: {
      flexWrap: 'nowrap',
    },
  },
  [`@media (min-width: ${ theme.breakpoint.m })`]: {
    innerContainer: {
      flexBasis: '80%',
    },
  },
  [`@media (min-width: ${ theme.breakpoint.l })`]: {
    innerContainer: {
      flexBasis: '70%',
    },
  },
  [`@media (min-width: ${ theme.breakpoint.xl })`]: {
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
            {elements[element].demo[elem].js.length === 1 && (
              <div
                className={classes.innerContainerFull}
                dangerouslySetInnerHTML={{ __html: elements[element].demo[elem].js[0] }}
              />
            )}
            {elements[element].demo[elem].js.length > 1 && (
              <div className={classes.innerContainer}>
                {elements[element].demo[elem].js.map((item, idx) => (
                  <div
                    dangerouslySetInnerHTML={{ __html: item }}
                    key={`preview ${ idx }`}
                    className={classes.element}
                  />
                ))}
              </div>
            )}
          </div>
          <CodeBlock>{elements[element].demo[elem].js.join('\n')}</CodeBlock>
        </Fragment>
      ))}
      <CodeUsage element={element} />
    </>
  )
}

ElementPreview.propTypes = {
  classes: PropTypes.object.isRequired,
  element: PropTypes.string.isRequired,
}

export default withStyles(styles)(ElementPreview)
