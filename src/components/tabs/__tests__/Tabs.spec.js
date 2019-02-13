import React from 'react'
import { render } from 'react-testing-library'
import Tabs from '../Tabs'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Tabs', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: [],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Tabs {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
