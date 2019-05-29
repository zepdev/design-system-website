import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import ThemeSelect from '../ThemeSelect'

describe('ThemeSelect', () => {
  it('renders correctly', () => {
    const mockProps = {
      onSelect: jest.fn(),
      selected: 'zeppelin',
      menuItems: ['mockItem'],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ThemeSelect {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
