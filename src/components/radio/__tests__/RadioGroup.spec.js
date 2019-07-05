import React from 'react'
import { render } from '@testing-library/react'
import RadioGroup from '../RadioGroup'

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const mockProps = {
      title: 'mockTitle',
    }
    const component = render(<RadioGroup {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
