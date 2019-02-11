import React from 'react'
import { render } from 'react-testing-library'
import DribbleIcon from '../DribbleIcon'

describe('DribbleIcon', () => {
  it('renders correctly', () => {
    const component = render(<DribbleIcon />)
    expect(component).toMatchSnapshot()
  })
})
