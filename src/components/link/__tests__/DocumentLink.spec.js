import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
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
