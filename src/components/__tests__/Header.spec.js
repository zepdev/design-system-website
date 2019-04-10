import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'basics',
      handleMenu: jest.fn(),
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Header {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
