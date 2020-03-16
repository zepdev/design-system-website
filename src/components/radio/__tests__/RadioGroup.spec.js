import React from 'react'
import { render } from '../../../../test-utils'
import RadioGroup from '../RadioGroup'

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const mockProps = {
      title: 'mockTitle',
    }
    const component = render(<RadioGroup {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
