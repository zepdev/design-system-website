import React from 'react'
import { render } from '../../../../test-utils'
import NavigationDropdownIcon from '../NavigationDropdownIcon'

describe('NavigationDropdownIcon', () => {
  it('renders correctly', () => {
    const component = render(<NavigationDropdownIcon />)
    expect(component).toMatchSnapshot()
  })
})
