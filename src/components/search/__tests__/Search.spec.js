import React from 'react'
import { render } from '@testing-library/react'
import Search from '../Search'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'

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
