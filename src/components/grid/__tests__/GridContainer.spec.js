import React from 'react'
import { render } from '../../../../test-utils'
import GridContainer from '../GridContainer'

describe('GridContainer', () => {
  it('renders correctly', () => {
    const component = render(<GridContainer />)
    expect(component).toMatchSnapshot()
  })
})
