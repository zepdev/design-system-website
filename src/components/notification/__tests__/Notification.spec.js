import React from 'react'
import { render } from 'react-testing-library'
import Notification from '../Notification'

describe('Notification', () => {
  it('renders correctly', () => {
    const component = render(<Notification />)
    expect(component).toMatchSnapshot()
  })
})
