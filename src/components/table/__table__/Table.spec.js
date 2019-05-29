import React from 'react'
import { render } from 'react-testing-library'
import Table from '../Table'

describe('Table', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: <tbody />,
      title: 'mockTitle',
    }
    const component = render(<Table {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
