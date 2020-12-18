import React from 'react'
import { render } from '../../../../test-utils'
import SearchExample from '../SearchExample'

describe('SearchExample', () => {
  it('renders correctly', () => {
    const component = render(<SearchExample />)
    expect(component).toMatchSnapshot()
  })
})
