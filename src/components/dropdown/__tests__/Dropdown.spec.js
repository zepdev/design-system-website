import React from 'react'
import { render } from 'react-testing-library'
import Dropdown from '../Dropdown'

describe('Dropdown', () => {
  it('renders correctly', () => {
    const mockProps = {
      onSelect: jest.fn(() => {}),
      menuTitle: 'mockTitle',
      menuItems: ['mockItem'],
    }
    const component = render(<Dropdown {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
