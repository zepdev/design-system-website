import React from 'react'
import { render } from 'react-testing-library'
import List from '../List'

describe('List', () => {
  it('renders correctly', () => {
    const component = render(<List />)
    expect(component).toMatchSnapshot()
  })
})
