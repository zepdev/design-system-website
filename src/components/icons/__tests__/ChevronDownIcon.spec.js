import React from 'react'
import { render } from '@testing-library/react'
import ChevronDownIcon from '../ChevronDownIcon'

describe('ChevronDownIcon', () => {
  it('renders correctly', () => {
    const component = render(<ChevronDownIcon />)
    expect(component).toMatchSnapshot()
  })
})
