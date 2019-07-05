import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
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
