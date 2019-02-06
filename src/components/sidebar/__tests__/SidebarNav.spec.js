import React from 'react'
import { render } from 'react-testing-library'
import SidebarNav from '../SidebarNav'

test('It should render', () => {
  const component = render(<SidebarNav />)

  expect(component).toMatchSnapshot()
})
