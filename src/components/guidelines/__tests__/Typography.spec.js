import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
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
    const span = getByTestId('specificationszep-typo--normal-body1')
    expect(span.children).toHaveLength(5)
  })
})
