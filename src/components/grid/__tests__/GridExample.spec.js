import React from 'react'
import { render } from '../../../../test-utils'
import GridExample from '../GridExample'

describe('GridExample', () => {
  it('renders correctly', () => {
    const component = render(<GridExample />)
    expect(component).toMatchSnapshot()
  })
})
