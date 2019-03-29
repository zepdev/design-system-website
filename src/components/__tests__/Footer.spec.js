import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'basics',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Footer {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
