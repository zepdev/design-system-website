import React from 'react'
import { render } from 'react-testing-library'
import SidebarNav from '../SidebarNav'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('SidebarNav', () => {
  it('renders correctly', () => {
    const mockProps = {
      setMenu: () => {},
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <SidebarNav {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
