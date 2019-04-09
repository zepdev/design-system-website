import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import ElementStyles from '../ElementStyles'

describe('ElementStyles', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementStyles {...mockProps} />
      </ThemeProvider>
    )

    expect(component).toMatchSnapshot()
  })
})
