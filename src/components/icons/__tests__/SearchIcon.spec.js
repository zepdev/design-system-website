import React from 'react'
import { render } from '@testing-library/react'
import SearchIcon from '../SearchIcon'

describe('SearchIcon', () => {
  it('renders correctly', () => {
    const component = render(<SearchIcon />)
    expect(component).toMatchSnapshot()
  })
})
