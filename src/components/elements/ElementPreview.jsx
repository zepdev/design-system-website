import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Headline from '../typography/Headline'
import CodeBlock from '../code/CodeBlock'
import CodeUsage from '../code/CodeUsage'
import elements from '../../data/elements'

const useStyles = makeStyles(theme => ({
  htmlContainer: {
    backgroundColor: theme.color.text.white,
    padding: `${ theme.space.l.rem }rem`,
    display: 'flex',
    justifyContent: 'center',
  },
  innerContainer: {
    flexBasis: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.up('s')]: {
      flexWrap: 'nowrap',
    },
    [theme.breakpoints.up('m')]: {
      flexBasis: '80%',
    },
    [theme.breakpoints.up('l')]: {
      flexBasis: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      flexBasis: '40%',
    },
  },
  innerContainerFull: {
    flexBasis: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  element: {
    paddingBottom: `${ theme.space.l.rem }rem`,
    [theme.breakpoints.up('s')]: {
      paddingBottom: 0,
    },
  },
}))

const ElementPreview = ({ element }) => {
  const classes = useStyles()
  return (
    <>
      {Object.keys(elements[element].demo).map((elem, idx) => (
        <Fragment key={`codeBlock${ idx }`}>
          <Headline variant="sm">{elem}</Headline>
          <div className={classes.htmlContainer}>
            {elements[element].demo[elem].js.length === 1 && (
              <div
                className={classes.innerContainerFull}
                dangerouslySetInnerHTML={{
                  __html: elements[element].demo[elem].js[0],
                }}
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
  element: PropTypes.string.isRequired,
}

export default ElementPreview
