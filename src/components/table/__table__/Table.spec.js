import React from 'react'
import { render } from 'react-testing-library'
import Table from '../Table'

describe('Table', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockString',
    }
    const component = render(<Table {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
