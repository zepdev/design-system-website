import React from 'react'
import { render } from '../../../../test-utils'
import Typography from '../Typography'

describe('Typography', () => {
  it('renders correctly', () => {
    const component = render(<Typography />)
    expect(component).toMatchSnapshot()
  })
})
