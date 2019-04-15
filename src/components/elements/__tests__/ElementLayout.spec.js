import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import ElementLayout from '../ElementLayout'

jest.mock('../../code/CodeUsage')

describe('ElementLayout', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementLayout {...mockProps} />
      </ThemeProvider>
    )

    expect(component).toMatchSnapshot()
  })
})
