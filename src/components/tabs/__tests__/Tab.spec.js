import React from 'react'
import { render } from 'react-testing-library'
import Tab from '../Tab'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('Tab', () => {
  it('renders correctly', () => {
    const mockProps = {
      label: 'mockTabLabel',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Tab {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
