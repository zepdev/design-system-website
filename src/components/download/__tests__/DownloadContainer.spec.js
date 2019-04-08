import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
import DownloadContainer from '../DownloadContainer'

describe('DownloadContainer', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <DownloadContainer />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
