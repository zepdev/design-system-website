import React from 'react'
import { render } from '../../../../test-utils'
import Select from '../Select'

describe('Select', () => {
  it('renders correctly', () => {
    const mockProps = {
      items: [],
      onChange: () => {},
      label: 'Select',
    }
    const component = render(<Select {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
