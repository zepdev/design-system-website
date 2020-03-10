import React from 'react'
import { render } from '../../../../test-utils'
import XingIcon from '../XingIcon'

describe('XingIcon', () => {
  it('renders correctly', () => {
    const component = render(<XingIcon />)
    expect(component).toMatchSnapshot()
  })
})
