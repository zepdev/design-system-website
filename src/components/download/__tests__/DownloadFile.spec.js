import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import DownloadFile from '../DownloadFile'

describe('DownloadFile', () => {
  it('renders correctly', () => {
    const mockProps = {
      title: 'mockTitle',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <DownloadFile {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('tests that something is downloaded', () => {
    const mockProps = {
      title: 'mockTitle',
    }
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <DownloadFile {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('downloadButton')
    fireEvent.click(button)
    // TODO: need expect that makes sense here
  })
})
