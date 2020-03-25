import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewIcon from '../icons/OpenInNewIcon'
import guidelines from 'zeppelin-element-library/guidelines.json'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: `${ theme.space.xxl.rem }rem`,
  },
  container: {
    flexBasis: '100%',
    paddingBottom: `${ theme.space.m.rem }rem`,
    [theme.breakpoints.up('s')]: {
      flexBasis: '48%',
      paddingBottom: 0,
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 136,
    background: theme.status.gray,
  },
  title: {
    fontSize: 28,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.color.global.white,
    paddingTop: theme.space.s.px,
    paddingBottom: theme.space.s.px,
    paddingLeft: theme.space.l.px,
    paddingRight: theme.space.l.px,
    borderTop: `1px solid ${ theme.status.gray }`,
  },
  text: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  link: {
    color: 'inherit',
    '&:hover': {
      color: theme.indigo.primary,
    },
  },
}))

const createPath = elem => {
  const words = elem ? elem.split(/(?=[A-Z])/) : []
  let res = null
  words.forEach((word, idx) => {
    if (idx === 0) {
      res = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    } else {
      res += `+${ word }`
    }
  })
  return res
}

function TypographySection() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {Object.keys(guidelines.typography.typefaces).map((elem, idx) => (
        <div className={classes.container} key={`typeface${ idx }`}>
          <div className={classes.titleContainer}>
            <p
              className={classes.title}
              style={{
                fontFamily: guidelines.typography.typefaces[elem].replace(
                  /["']/g,
                  ''
                ),
              }}
            >
              Lorem Ipsum
            </p>
          </div>
          <div className={classes.buttonContainer}>
            <p className={classes.text}>{elem} Font Family</p>
            <a
              href={`https://fonts.google.com/specimen/${ createPath(elem) }`}
              target="_blank"
              rel="noopener"
              aria-label="Launch"
              className={classes.link}
            >
              <OpenInNewIcon width="24" height="24" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TypographySection
