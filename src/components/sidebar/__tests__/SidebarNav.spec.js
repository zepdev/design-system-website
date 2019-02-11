import React from 'react'
import { render } from 'react-testing-library'
import SidebarNav from '../SidebarNav'

describe('SidebarNav', () => {
  it('renders correctly', () => {
    const component = render(<SidebarNav />)
    expect(component).toMatchSnapshot()
  })
})
