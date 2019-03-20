import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
import Colors from '../Colors'

describe('Colors', () => {
  it('renders correctly', () => {
    const mockProps = {
      classes: {},
      section: 'primary',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Colors {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
