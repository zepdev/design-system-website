import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
import DownloadContainer from '../DownloadContainer'

describe('DownloadContainer', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: [],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <DownloadContainer {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
