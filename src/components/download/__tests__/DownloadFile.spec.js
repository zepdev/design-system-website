import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
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
})
