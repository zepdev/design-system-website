import React from 'react'
import { render } from 'react-testing-library'
import CopyIcon from '../CopyIcon'

describe('CopyIcon', () => {
  it('renders correctly', () => {
    const component = render(<CopyIcon />)
    expect(component).toMatchSnapshot()
  })
})
