import React from 'react'
import { render } from 'react-testing-library'
import Textarea from '../Textarea'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Textarea', () => {
  it('renders correctly', () => {
    const mockProps = {}
    const component = render(
      <ThemeProvider theme={theme}>
        <Textarea {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})