import React from 'react'
import { render } from 'react-testing-library'
import Search from '../Search'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('Search', () => {
  it('renders correctly', () => {
    const mockProps = {
      title: 'mockTitle',
      items: [{ value: 'mockValue' }],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Search {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
