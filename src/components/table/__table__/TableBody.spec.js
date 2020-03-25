import React from 'react'
import { render } from '../../../../test-utils'
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
