import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
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
