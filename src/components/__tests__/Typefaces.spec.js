import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import Typefaces from '../Typefaces'

describe('Typefaces', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Typefaces />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
