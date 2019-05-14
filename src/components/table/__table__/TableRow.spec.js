import React from 'react'
import { render } from 'react-testing-library'
import TableRow from '../TableRow'

describe('TableRow', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockString',
    }
    const component = render(<TableRow {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
