import React from 'react'
import { render } from 'react-testing-library'
import Sidebar from '../Sidebar'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Sidebar', () => {
  it('renders correctly', () => {
    const mockProps = {
      isMenuOpen: true,
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Sidebar {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
