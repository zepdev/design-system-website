import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import GridCol from '../GridCol'

describe('GridCol', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <GridCol />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
