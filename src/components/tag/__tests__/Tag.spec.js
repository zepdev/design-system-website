import React from 'react'
import { render } from '@testing-library/react'
import Tag from '../Tag'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

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
