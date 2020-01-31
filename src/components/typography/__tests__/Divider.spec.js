import React from 'react'
import { render } from '@testing-library/react'
import Divider from '../Divider'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'

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
