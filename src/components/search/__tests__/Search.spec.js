import React from 'react'
import { render } from '../../../../test-utils'
import Search from '../Search'

describe('Search', () => {
  it('renders correctly', () => {
    const mockProps = {
      title: 'mockTitle',
      items: [{ value: 'mockValue' }],
      placeholder: 'Search',
    }
    const component = render(<Search {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
