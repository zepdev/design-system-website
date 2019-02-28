import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import ElementContent from '../ElementContent'

describe('ElementContent', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementContent {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
