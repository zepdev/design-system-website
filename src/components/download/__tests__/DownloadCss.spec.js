import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
import DownloadCss from '../DownloadCss'

describe('DownloadCss', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <DownloadCss />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
