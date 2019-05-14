import React from 'react'
import { render } from 'react-testing-library'
import TableCell from '../TableCell'

describe('TableCell', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockString',
    }
    const component = render(<TableCell {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
