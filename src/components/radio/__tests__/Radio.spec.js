import React from 'react'
import { render } from '@testing-library/react'
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
