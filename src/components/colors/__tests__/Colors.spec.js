import React from 'react'
import { render } from 'react-testing-library'
import Colors from '../Colors'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Colors', () => {
  it('renders correctly', () => {
    const mockProps = {
      classes: {},
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Colors {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
