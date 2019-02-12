import React from 'react'
import { render } from 'react-testing-library'
import Tab from '../Tab'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Tab', () => {
  it('renders correctly', () => {
    const mockProps = {
      isMenuOpen: true,
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Tab {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
