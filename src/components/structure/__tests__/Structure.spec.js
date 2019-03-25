import React from 'react'
import { render } from 'react-testing-library'
import Structure from '../Structure'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Structure', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'mockString',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Structure {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
