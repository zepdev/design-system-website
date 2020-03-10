import React from 'react'
import { render } from '../../../../test-utils'
import ContentTable from '../ContentTable'

describe('ContentTable', () => {
  it('renders correctly', () => {
    const mockProps = {
      header: ['mockHeader1'],
      content: { item1: 'mockItem' },
      title: 'mockTitle',
    }
    const component = render(<ContentTable {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
