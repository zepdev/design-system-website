import React, { useState, Fragment } from "react"
import { makeStyles } from "@material-ui/styles"
import Swatch from "../swatch/Swatch"
import Tabs from "@zlab-de/zel-react/Tabs"
import Tab from "@zlab-de/zel-react/Tab"
import Headline from "../typography/Headline"
import ElementUsage from "../elements/ElementUsage"
import { color } from "@zlab-de/zel-react/guidelines.json"

const useStyles = makeStyles(theme => ({
  tabs: {
    marginBottom: `${theme.space.xxl.rem}rem`,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.up("m")]: { justifyContent: "flex-start" },
  },
}))

function Color() {
  const [value, setValue] = useState(0)

  const classes = useStyles()

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
              {section === "font" || section === "fontNegative" ? (
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
                      name={elem}
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

export default Color
