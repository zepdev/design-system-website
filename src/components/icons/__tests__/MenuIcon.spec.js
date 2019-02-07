import React from 'react'
import { render } from 'react-testing-library'
import MenuIcon from '../MenuIcon'

describe('MenuIcon', () => {
  it('renders correctly', () => {
    const component = render(<MenuIcon />)
    expect(component).toMatchSnapshot()
  })
})
