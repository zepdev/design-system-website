import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import Tabs from '../Tabs'
import Tab from '../Tab'

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
    jest.mock('../Tab')
    const mockProps = {
      children: [<Tab label="MockLabel" />],
    }
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Tabs {...mockProps} />
      </ThemeProvider>
    )
    const tabs = getByTestId('tabs')
    expect(tabs.children).toHaveLength(1)
  })
})
