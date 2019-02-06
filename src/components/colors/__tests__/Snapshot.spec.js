import React from 'react'
import { render } from 'react-testing-library'
import Swatch from '../Swatch'

describe('Swatch', () => {
  it('renders correctly', () => {
    const mockProps = { title: 'title', color: '#fff' }
    const component = render(<Swatch {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
