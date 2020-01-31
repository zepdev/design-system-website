import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
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
