import React from 'react'
import { render } from '../../../../test-utils'
import Headline from '../Headline'

describe('Headline', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockHeadline',
    }
    const component = render(<Headline {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
