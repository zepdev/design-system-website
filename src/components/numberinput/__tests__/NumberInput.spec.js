import React from 'react'
import { render } from 'react-testing-library'
import NumberInput from '../NumberInput'

describe('NumberInput', () => {
  it('renders correctly', () => {
    const component = render(<NumberInput />)
    expect(component).toMatchSnapshot()
  })
})
