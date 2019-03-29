import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'
import Tabs from '../Tabs'

describe('Tabs', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: [],
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Tabs {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders children component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Tabs>
          <div>mockItem</div>
        </Tabs>
      </ThemeProvider>
    )
    const tabs = getByTestId('tabs')
    expect(tabs.children).toHaveLength(1)
  })
})
