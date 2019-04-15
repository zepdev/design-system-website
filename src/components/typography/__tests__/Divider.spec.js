import React from 'react'
import { render } from 'react-testing-library'
import Divider from '../Divider'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('Divider', () => {
  it('renders correctly', () => {
    const mockProps = {}
    const component = render(
      <ThemeProvider theme={theme}>
        <Divider {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
