import React from 'react'
import { render } from '../../../../test-utils'
import ThemeSelect from '../ThemeSelect'

describe('ThemeSelect', () => {
  it('renders correctly', () => {
    const mockProps = {
      onSelect: jest.fn(),
      selected: 'zeppelin',
      menuItems: ['mockItem'],
    }
    const component = render(<ThemeSelect {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
