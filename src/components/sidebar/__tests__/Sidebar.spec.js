import React from 'react'
import { render } from 'react-testing-library'
import Sidebar from '../Sidebar'

test('It should render', () => {
  const mockProps = {
    isMenuOpen: true,
  }
  const component = render(<Sidebar {...mockProps} />)

  expect(component).toMatchSnapshot()
})
