import React from 'react'
import { render } from 'react-testing-library'
import ArrowDownIcon from '../ArrowDownIcon'

describe('ArrowDownIcon', () => {
  it('renders correctly', () => {
    const component = render(<ArrowDownIcon />)
    expect(component).toMatchSnapshot()
  })
})
