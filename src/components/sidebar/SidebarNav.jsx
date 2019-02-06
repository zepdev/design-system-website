import React from 'react'
import navigation from '../../data/navigation.json'
import SidebarNavItem from './SidebarNavItem.jsx'

const SidebarNav = () => (
  <ul className="zds-sidebar--list">
    {Object.keys(navigation).map((elem, idx) => (
      <SidebarNavItem key={`li-${idx}`} item={navigation[elem]} />
    ))}
  </ul>
)

export default SidebarNav
