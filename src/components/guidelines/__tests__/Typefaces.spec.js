import React from 'react'
import { render } from '../../../../test-utils'
import Typefaces from '../Typefaces'

describe('Typefaces', () => {
  it('renders correctly', () => {
    const component = render(<Typefaces />)
    expect(component).toMatchSnapshot()
  })
})
