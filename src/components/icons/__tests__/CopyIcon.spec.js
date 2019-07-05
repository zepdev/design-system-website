import React from 'react'
import { render } from '@testing-library/react'
import CopyIcon from '../CopyIcon'

describe('CopyIcon', () => {
  it('renders correctly', () => {
    const component = render(<CopyIcon />)
    expect(component).toMatchSnapshot()
  })
})
