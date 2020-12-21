import React, { useState } from "react"
import Tabs from "@zlab-de/zel-react/Tabs"
import Tab from "@zlab-de/zel-react/Tab"
import ZepIconEssentialStar from "@zlab-de/zel-react-icons/ZepIconEssentialStar"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: `${theme.space.l.rem}rem`,
  },
  header: {
    marginBottom: `${theme.space.m.rem}rem`,
  },
  tab: {
    padding: 15,
    background: theme.color.global.lightGray,
  },
}))

function TabsExample() {
  const [value, setValue] = useState(0)

  const classes = useStyles()

  function handleChange(newValue) {
    setValue(newValue)
  }
  return (
    <>
      <div className={classes.container}>
        <p className={classes.header}>Default</p>
        <Tabs value={value} onClick={handleChange} ariaLabel="demo1">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
        {value === 0 && <p className={classes.tab}>This is Tab 1</p>}
        {value === 1 && <p className={classes.tab}>This is Tab 2</p>}
      </div>
      <div className={classes.container}>
        <p className={classes.header}>Small</p>
        <Tabs
          value={value}
          onClick={handleChange}
          size="small"
          ariaLabel="demo2"
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
        {value === 0 && <p className={classes.tab}>This is Tab 1</p>}
        {value === 1 && <p className={classes.tab}>This is Tab 2</p>}
      </div>
      <div className={classes.container}>
        <p className={classes.header}>Icon</p>
        <Tabs value={value} onClick={handleChange} ariaLabel="demo3">
          <Tab label="Tab 1" icon={<ZepIconEssentialStar />} />
          <Tab label="Tab 2" icon={<ZepIconEssentialStar />} />
        </Tabs>
        {value === 0 && <p className={classes.tab}>This is Tab 1</p>}
        {value === 1 && <p className={classes.tab}>This is Tab 2</p>}
      </div>
      <div className={classes.container}>
        <p className={classes.header}>Icon Small</p>
        <Tabs
          value={value}
          onClick={handleChange}
          size="small"
          ariaLabel="demo4"
        >
          <Tab label="Tab 1" icon={<ZepIconEssentialStar />} />
          <Tab label="Tab 2" icon={<ZepIconEssentialStar />} />
        </Tabs>
        {value === 0 && <p className={classes.tab}>This is Tab 1</p>}
        {value === 1 && <p className={classes.tab}>This is Tab 2</p>}
      </div>
    </>
  )
}

export default TabsExample
