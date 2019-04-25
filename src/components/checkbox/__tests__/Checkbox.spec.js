import React from 'react'
import { render } from 'react-testing-library'
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
