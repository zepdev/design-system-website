import React from 'react'
import { render } from 'react-testing-library'
import Sidebar from '../Sidebar'

describe('Sidebar', () => {
  it('renders correctly', () => {
    const mockProps = {
      isMenuOpen: true,
    }
    const component = render(<Sidebar {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
