import React from 'react'
import { render } from '../../../../test-utils'
import Spacing from '../Spacing'

describe('Spacing', () => {
  it('renders correctly', () => {
    const component = render(<Spacing />)
    expect(component).toMatchSnapshot()
  })
})
