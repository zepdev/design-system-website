import React from 'react'
import { render } from '@testing-library/react'
import MenuIcon from '../MenuIcon'

describe('MenuIcon', () => {
  it('renders correctly', () => {
    const component = render(<MenuIcon />)
    expect(component).toMatchSnapshot()
  })
})
