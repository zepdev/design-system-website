import React from 'react'
import { render } from 'react-testing-library'
import Colors from '../Colors'

describe('Colors', () => {
  it('renders correctly', () => {
    const component = render(<Colors />)
    expect(component).toMatchSnapshot()
  })
})
