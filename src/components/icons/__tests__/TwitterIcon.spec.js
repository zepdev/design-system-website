import React from 'react'
import { render } from 'react-testing-library'
import TwitterIcon from '../TwitterIcon'

describe('TwitterIcon', () => {
  it('renders correctly', () => {
    const component = render(<TwitterIcon />)
    expect(component).toMatchSnapshot()
  })
})
