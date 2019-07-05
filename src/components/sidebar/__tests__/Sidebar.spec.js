import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from '../Sidebar'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('Sidebar', () => {
  it('renders correctly', () => {
    const mockProps = {
      isMenuOpen: true,
      setMenu: () => {},
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Sidebar {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
