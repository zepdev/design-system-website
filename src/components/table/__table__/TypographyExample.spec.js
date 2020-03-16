import React from 'react'
import { render } from '../../../../test-utils'
import TypographyExample from '../TypographyExample'

describe('TypographyExample', () => {
  it('renders correctly', () => {
    const mockProps = {
      header: ['mockHeader1'],
      content: { item1: 'mockItem' },
      title: 'mockTitle',
    }
    const component = render(<TypographyExample {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
