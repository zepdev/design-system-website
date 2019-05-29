import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import GridRow from '../GridRow'

describe('GridRow', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <GridRow />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
