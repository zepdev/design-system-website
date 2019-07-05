import React from 'react'
import { render } from '@testing-library/react'
import List from '../List'

describe('List', () => {
  it('renders correctly', () => {
    const component = render(<List />)
    expect(component).toMatchSnapshot()
  })
})
