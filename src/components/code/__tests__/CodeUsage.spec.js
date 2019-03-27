import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
import CodeUsage from '../CodeUsage'

describe('CodeUsage', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: {
        react: ['mockCode'],
        vue: ['mockCode'],
      },
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <CodeUsage {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
