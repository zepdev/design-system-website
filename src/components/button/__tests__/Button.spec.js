import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  it('renders correctly', () => {
    const mockProps = {
      onClick: jest.fn(() => {}),
      children: ['buttonText'],
    }
    const component = render(<Button {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
