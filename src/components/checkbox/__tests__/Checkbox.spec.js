import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from '../Checkbox'

describe('Checkbox ', () => {
  it('renders correctly', () => {
    const mockProps = {
      label: 'mockLabel',
    }
    const component = render(<Checkbox {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
