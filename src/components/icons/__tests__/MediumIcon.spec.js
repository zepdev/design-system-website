import React from 'react'
import { render } from 'react-testing-library'
import MediumIcon from '../MediumIcon'

describe('MediumIcon', () => {
  it('renders correctly', () => {
    const component = render(<MediumIcon />)
    expect(component).toMatchSnapshot()
  })
})
