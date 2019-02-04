import React from 'react'
import { render } from 'react-testing-library'
import Button from '../Button'

test('It should render', () => {
  const mockProps = {
    onClick: jest.fn(() => {}),
    children: 'Some text',
  }
  render(<Button {...mockProps} />)
})
