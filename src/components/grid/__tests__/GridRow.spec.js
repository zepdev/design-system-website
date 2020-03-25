import React from 'react'
import { render } from '../../../../test-utils'
import GridRow from '../GridRow'

describe('GridRow', () => {
  it('renders correctly', () => {
    const component = render(<GridRow />)
    expect(component).toMatchSnapshot()
  })
})
