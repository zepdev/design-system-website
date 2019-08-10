import React from 'react'
import { render } from '@testing-library/react'
import Notification from '../Notification'

describe('Notification', () => {
  it('renders correctly', () => {
    const component = render(<Notification />)
    expect(component).toMatchSnapshot()
  })
})
