import React from 'react'
import { render } from 'react-testing-library'
import TableBody from '../TableBody'

describe('TableBody', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockString',
    }
    const component = render(<TableBody {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
