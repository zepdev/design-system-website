import React from 'react'
import { render } from '../../../../test-utils'
import GridCol from '../GridCol'

describe('GridCol', () => {
  it('renders correctly', () => {
    const component = render(<GridCol />)
    expect(component).toMatchSnapshot()
  })
})
