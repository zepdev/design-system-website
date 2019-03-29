import React from 'react'
import { render } from 'react-testing-library'
import Tag from '../Tag'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

describe('Tag', () => {
  it('renders correctly', () => {
    const mockProps = {
      label: 'mockTagLabel',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Tag {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
})