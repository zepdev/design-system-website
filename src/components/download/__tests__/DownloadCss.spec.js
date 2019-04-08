import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
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
