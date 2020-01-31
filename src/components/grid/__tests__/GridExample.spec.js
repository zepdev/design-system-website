import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
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
