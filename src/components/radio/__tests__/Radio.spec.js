import React from 'react'
import { render } from 'react-testing-library'
import Radio from '../Radio'

describe('Radio', () => {
  it('renders correctly', () => {
    const mockProps = {
      checked: false,
      name: 'mockName',
      value: 'mockValue',
      onChange: jest.fn(),
    }
    const component = render(<Radio {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
