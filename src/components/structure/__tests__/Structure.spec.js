import React from 'react'
import { render } from '../../../../test-utils'
import Structure from '../Structure'

describe('Structure', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'mockString',
    }
    const component = render(<Structure {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
