import React from 'react'
import { render } from '../../../../test-utils'
import RadioExample from '../RadioExample'

describe('RadioExample', () => {
  it('renders correctly', () => {
    const component = render(<RadioExample />)
    expect(component).toMatchSnapshot()
  })
})
