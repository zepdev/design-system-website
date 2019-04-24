import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Dropdown from '../Dropdown'

describe('Dropdown', () => {
  it('renders correctly', () => {
    const mockProps = {
      onSelect: jest.fn(() => {}),
      selected: 'zeppelin',
      menuItems: ['mockItem'],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Dropdown {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
