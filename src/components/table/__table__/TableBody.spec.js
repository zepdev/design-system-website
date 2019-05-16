import React from 'react'
import { render } from 'react-testing-library'
import TableBody from '../TableBody'

describe('TableBody', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: <tr />,
    }
    const component = render(
      <table>
        <TableBody {...mockProps} />
      </table>
    )
    expect(component).toMatchSnapshot()
  })
})
