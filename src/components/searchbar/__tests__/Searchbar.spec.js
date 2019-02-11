import React from 'react'
import { render } from 'react-testing-library'
import Searchbar from '../Searchbar'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Searchbar', () => {
  it('renders correctly', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Searchbar />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
