import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
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
