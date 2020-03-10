import React from 'react'
import { render } from '../../../../test-utils'
import GridImage from '../GridImage'

describe('GridImage', () => {
  it('renders correctly', () => {
    const mockProps = {
      classes: {},
    }
    const component = render(<GridImage {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
