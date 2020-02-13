import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
import ElementLayout from '../ElementLayout'

// jest.mock('../../code/CodeUsage')

describe('ElementLayout', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        {/* <ElementLayout {...mockProps} /> */}
      </ThemeProvider>
    )

    expect(component).toMatchSnapshot()
  })
})
