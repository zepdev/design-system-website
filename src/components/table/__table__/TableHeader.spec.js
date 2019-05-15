import React from 'react'
import { render } from 'react-testing-library'
import TableHeader from '../TableHeader'

describe('TableHeader', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockString',
    }
    const component = render(<TableHeader {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
