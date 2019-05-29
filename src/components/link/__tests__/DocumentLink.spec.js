import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import DocumentLink from '../DocumentLink'

describe('DocumentLink', () => {
  it('renders correctly', () => {
    const mockProps = {
      text: 'mockString',
      to: 'mockLink',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <DocumentLink {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
