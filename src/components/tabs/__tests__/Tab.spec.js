import React from 'react'
import { render } from '../../../../test-utils'
import Tab from '../Tab'

describe('Tab', () => {
  it('renders correctly', () => {
    const mockProps = {
      label: 'mockTabLabel',
    }
    const component = render(<Tab {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
