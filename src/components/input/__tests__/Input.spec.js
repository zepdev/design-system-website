import React from 'react'
import { render } from 'react-testing-library'
import Input from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    const mockProps = {
      type: 'text',
      startValue: 0,
    }
    const component = render(<Input {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
