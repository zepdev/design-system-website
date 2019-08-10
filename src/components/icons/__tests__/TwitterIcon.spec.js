import React from 'react'
import { render } from '@testing-library/react'
import TwitterIcon from '../TwitterIcon'

describe('TwitterIcon', () => {
  it('renders correctly', () => {
    const component = render(<TwitterIcon />)
    expect(component).toMatchSnapshot()
  })
})
