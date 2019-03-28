import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import Typography from '../Typography'

describe('Typography', () => {
  it('renders correctly', () => {
    const mockProps = {
      section: 'basics',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Typography {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders the a list of p for specifications', () => {
    const mockProps = {
      section: 'normal',
    }
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Typography {...mockProps} />
      </ThemeProvider>
    )
    const span = getByTestId('specifications')
    expect(span.children).toHaveLength(4)
  })
})
