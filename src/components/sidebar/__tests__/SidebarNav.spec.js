import React from 'react'
import { render } from 'react-testing-library'
import SidebarNav from '../SidebarNav'

describe('SidebarNav', () => {
  it('renders correctly', () => {
    const mockProps = {
      setMenu: () => {},
    }
    const component = render(<SidebarNav {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
