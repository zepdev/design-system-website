import React from 'react'
import { render } from 'react-testing-library'
import Searchbar from '../Searchbar'

describe('Searchbar', () => {
  it('renders correctly', () => {
    const component = render(<Searchbar />)
    expect(component).toMatchSnapshot()
  })
})
