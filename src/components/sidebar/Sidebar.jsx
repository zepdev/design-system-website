import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'
import clsx from 'clsx'
import navigation from '../../data/navigation.json'
import SidebarNavItem from './SidebarNavItem.jsx'

let useStyles = createUseStyles(theme => ({
  root: {
    zIndex: 3,
    background: theme.color.gray.white.hex,
    transition: 'transform 0.2s',
    borderRight: `1px solid ${theme.color.gray.grayMid.hex}`,
    paddingTop: `${theme.spacing.component.xl.rem}rem`,
  },
  hidden: {
    transform: 'translateX(-100%)',
    MsTransform: 'translateX(-100%)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    width: 250,
  },
  [`@media (min-width: ${theme.breakpoint.m})`]: {
    list: {
      width: 300,
    },
  },
}))

const Sidebar = ({ ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <SidebarNavItem item={{ title: 'Home' }} home />
        {Object.keys(navigation).map((elem, idx) => (
          <SidebarNavItem key={`li-${idx}`} item={navigation[elem]} />
        ))}
        <SidebarNavItem
          item={{ title: 'v0' }}
          link="https://v0-zds.zepdev.net/"
        />
      </ul>
    </div>
  )
}

export default Sidebar
