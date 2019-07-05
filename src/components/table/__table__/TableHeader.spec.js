import React from 'react'
import { render } from '@testing-library/react'
import TableHeader from '../TableHeader'

describe('TableHeader', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockString',
    }
    const component = render(
      <table>
        <TableHeader {...mockProps} />
      </table>
    )
    expect(component).toMatchSnapshot()
  })
})
