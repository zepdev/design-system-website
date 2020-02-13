import React, { useState, Fragment } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import Swatch from '../swatch/Swatch'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'
import Headline from '../typography/Headline'
import ElementUsage from '../elements/ElementUsage'
import { color } from 'zeppelin-element-library/guidelines.json'

let useStyles = createUseStyles(theme => ({
  tabs: {
    marginBottom: `${theme.spacing.component.xxl.rem}rem`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    container: {
      justifyContent: 'flex-start',
    },
  },
}))

function Colors({ ...props }) {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  function handleChange(newValue) {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onClick={handleChange} className={classes.tabs}>
        <Tab label="Overview" />
        <Tab label="Usage" />
      </Tabs>
      {value === 0 && (
        <>
          {Object.keys(color).map((section, idx) => (
            <Fragment key={`swatch${idx}`}>
              <Headline variant="md">{section}</Headline>
              {section === 'font' || section === 'fontNegative' ? (
                <Swatch
                  variant="font"
                  color={color[section]}
                  key={`swatch${color[section]}`}
                />
              ) : (
                <div className={classes.container}>
                  {Object.keys(color[section]).map(elem => (
                    <Swatch
                      color={color[section][elem]}
                      key={`swatch${elem}`}
                    />
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </>
      )}
      {value === 1 && <ElementUsage element="colors" />}
    </>
  )
}

export default Colors
