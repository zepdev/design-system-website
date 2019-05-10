import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import GridImage from '../GridImage'

describe('GridImage', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <GridImage />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
