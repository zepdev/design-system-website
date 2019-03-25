import React from 'react'
import { render } from 'react-testing-library'
import LinkedinIcon from '../LinkedinIcon'

describe('LinkedinIcon', () => {
  it('renders correctly', () => {
    const component = render(<LinkedinIcon />)
    expect(component).toMatchSnapshot()
  })
})
