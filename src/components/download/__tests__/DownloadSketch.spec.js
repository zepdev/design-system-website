import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import DownloadSketch from '../DownloadSketch'

describe('DownloadSketch', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <DownloadSketch />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
