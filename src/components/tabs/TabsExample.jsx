import React, { useState } from 'react'
import Tabs from '@zlab-de/zel-react/Tabs'
import Tab from '@zlab-de/zel-react/Tab'
import ZepiconsStar from '@zlab-de/zel-react-icons/ZepiconsStar'
import { createUseStyles, useTheme } from 'react-jss'

let useStyles = createUseStyles(theme => ({
  container: {
    marginBottom: `${theme.spacing.component.l.rem}rem`,
  },
  header: {
    marginBottom: `${theme.spacing.component.m.rem}rem`,
  },
  tab: {
    padding: 15,
    background: theme.color.gray.grayLighter.hex,
  },
}))

function TabsExample({ ...props }) {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

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
          <Tab label="Tab 1" icon={<ZepiconsStar />} />
          <Tab label="Tab 2" icon={<ZepiconsStar />} />
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
          <Tab label="Tab 1" icon={<ZepiconsStar />} />
          <Tab label="Tab 2" icon={<ZepiconsStar />} />
        </Tabs>
        {value === 0 && <p className={classes.tab}>This is Tab 1</p>}
        {value === 1 && <p className={classes.tab}>This is Tab 2</p>}
      </div>
    </>
  )
}

export default TabsExample
