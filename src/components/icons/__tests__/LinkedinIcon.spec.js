import React from 'react'
import { render } from '@testing-library/react'
import LinkedinIcon from '../LinkedinIcon'

describe('LinkedinIcon', () => {
  it('renders correctly', () => {
    const component = render(<LinkedinIcon />)
    expect(component).toMatchSnapshot()
  })
})
