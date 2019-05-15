import React from 'react'
import { render } from 'react-testing-library'
import Select from '../Select'

describe('Select', () => {
  it('renders correctly', () => {
    const component = render(<Select />)
    expect(component).toMatchSnapshot()
  })
})
