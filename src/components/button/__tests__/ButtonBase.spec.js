import React from 'react'
import { render } from 'react-testing-library'
import ButtonBase from '../ButtonBase'

describe('ButtonBase', () => {
  it('renders correctly', () => {
    const mockProps = {
      onClick: jest.fn(() => {}),
      children: 'buttonText',
    }
    const component = render(<ButtonBase {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
