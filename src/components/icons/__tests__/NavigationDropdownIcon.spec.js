import React from 'react'
import { render } from 'react-testing-library'
import NavigationDropdownIcon from '../NavigationDropdownIcon'

describe('NavigationDropdownIcon', () => {
  it('renders correctly', () => {
    const component = render(<NavigationDropdownIcon />)
    expect(component).toMatchSnapshot()
  })
})
