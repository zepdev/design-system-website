import React from 'react'
import { render } from 'react-testing-library'
import ZeppelinIcon from '../ZeppelinIcon'

describe('ZeppelinIcon', () => {
  it('renders correctly', () => {
    const component = render(<ZeppelinIcon />)
    expect(component).toMatchSnapshot()
  })
})
