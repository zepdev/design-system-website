import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import navigation from '../../data/navigation.json'
import SidebarNavItem from './SidebarNavItem.jsx'

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 3,
    background: theme.color.white[84],
    transition: 'transform 0.2s',
    borderRight: `1px solid ${ theme.color.global.almostWhite }`,
    paddingTop: `${ theme.space.xl.rem }rem`,
  },
  hidden: {
    transform: 'translateX(-100%)',
    MsTransform: 'translateX(-100%)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    width: 250,
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
  },
}))

const Sidebar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <SidebarNavItem item={{ title: 'Home' }} home />
        {Object.keys(navigation).map((elem, idx) => (
          <SidebarNavItem key={`li-${ idx }`} item={navigation[elem]} />
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
