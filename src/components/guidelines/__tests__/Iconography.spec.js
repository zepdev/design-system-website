import React from 'react'
import { render } from '../../../../test-utils'
import Icons from '../Icons'

describe('Icons', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'action',
    }
    const component = render(<Icons {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
