import React from 'react'
import { render } from 'react-testing-library'
import XingIcon from '../XingIcon'

describe('XingIcon', () => {
  it('renders correctly', () => {
    const component = render(<XingIcon />)
    expect(component).toMatchSnapshot()
  })
})
