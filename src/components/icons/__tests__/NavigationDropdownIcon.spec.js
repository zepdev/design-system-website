import React from 'react'
import { render } from '@testing-library/react'
import NavigationDropdownIcon from '../NavigationDropdownIcon'

describe('NavigationDropdownIcon', () => {
  it('renders correctly', () => {
    const component = render(<NavigationDropdownIcon />)
    expect(component).toMatchSnapshot()
  })
})
