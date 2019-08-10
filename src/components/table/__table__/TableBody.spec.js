import React from 'react'
import { render } from '@testing-library/react'
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
