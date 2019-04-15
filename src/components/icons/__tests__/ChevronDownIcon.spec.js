import React from 'react'
import { render } from 'react-testing-library'
import ChevronDownIcon from '../ChevronDownIcon'

describe('ChevronDownIcon', () => {
  it('renders correctly', () => {
    const component = render(<ChevronDownIcon />)
    expect(component).toMatchSnapshot()
  })
})
