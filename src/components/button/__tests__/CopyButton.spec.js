import React from 'react'
import { render } from 'react-testing-library'
import CopyButton from '../CopyButton'

describe('CopyButton', () => {
  it('renders correctly', () => {
    const mockProps = {
      onClick: jest.fn(() => {}),
      children: 'buttonText',
    }
    const component = render(<CopyButton {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
