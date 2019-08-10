import React from 'react'
import { render } from '@testing-library/react'
import TableRow from '../TableRow'

describe('TableRow', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: <th />,
    }
    const component = render(
      <table>
        <tbody>
          <TableRow {...mockProps} />
        </tbody>
      </table>
    )
    expect(component).toMatchSnapshot()
  })
})
