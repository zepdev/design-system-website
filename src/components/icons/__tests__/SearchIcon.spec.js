import React from 'react'
import { render } from 'react-testing-library'
import SearchIcon from '../SearchIcon'

describe('SearchIcon', () => {
  it('renders correctly', () => {
    const component = render(<SearchIcon />)
    expect(component).toMatchSnapshot()
  })
})
