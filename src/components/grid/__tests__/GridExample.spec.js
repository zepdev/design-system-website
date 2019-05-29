import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import GridExample from '../GridExample'

describe('GridExample', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <GridExample />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
