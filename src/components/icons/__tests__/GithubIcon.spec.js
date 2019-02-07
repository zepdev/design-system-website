import React from 'react'
import { render } from 'react-testing-library'
import GithubIcon from '../GithubIcon'

describe('GithubIcon', () => {
  it('renders correctly', () => {
    const component = render(<GithubIcon />)
    expect(component).toMatchSnapshot()
  })
})
