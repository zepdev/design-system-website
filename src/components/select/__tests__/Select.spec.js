import React from 'react'
import { render } from 'react-testing-library'
import Select from '../Select'

describe('Select', () => {
  it('renders correctly', () => {
    const mockProps = {
      items: [],
      onChange: () => {},
    }
    const component = render(<Select {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
