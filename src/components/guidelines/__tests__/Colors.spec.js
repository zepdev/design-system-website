import React from 'react'
import { render } from '../../../../test-utils'
import Colors from '../Colors'

describe('Colors', () => {
  it('renders correctly', () => {
    const mockProps = {
      classes: {},
      section: 'primary',
    }
    const component = render(<Colors {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
