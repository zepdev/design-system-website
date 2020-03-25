import React from 'react'
import { render } from '../../../../test-utils'
import Sidebar from '../Sidebar'

describe('Sidebar', () => {
  it('renders correctly', () => {
    const mockProps = {
      isMenuOpen: true,
      setMenu: () => {},
    }
    const component = render(<Sidebar {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
