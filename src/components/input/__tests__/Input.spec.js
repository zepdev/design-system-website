import React from 'react'
import { render } from '@testing-library/react'
import Input from '../Input'

describe('Input', () => {
  it('renders correctly', () => {
    const mockProps = {
      type: 'text',
      startValue: 0,
      id: 'mockId',
    }
    const component = render(<Input {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
