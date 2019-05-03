import React from 'react'
import { render } from 'react-testing-library'
import Radio from '../Radio'

describe('Radio', () => {
  it('renders correctly', () => {
    const component = render(<Radio />)
    expect(component).toMatchSnapshot()
  })
})
