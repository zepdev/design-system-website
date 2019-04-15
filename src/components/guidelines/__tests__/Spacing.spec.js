import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Spacing from '../Spacing'

describe('Spacing', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Spacing />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
