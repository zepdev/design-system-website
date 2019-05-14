import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'
import ContentTable from '../ContentTable'

describe('ContentTable', () => {
  it('renders correctly', () => {
    const mockProps = {
      header: ['mockHeader1'],
      content: { item1: 'mockItem' },
      title: 'mockTitle',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ContentTable {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})
