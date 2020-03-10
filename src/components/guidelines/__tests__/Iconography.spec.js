import React from 'react'
import { render } from '../../../../test-utils'
import Iconography from '../Iconography'

describe('Iconography', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'action',
    }
    const component = render(<Iconography {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
