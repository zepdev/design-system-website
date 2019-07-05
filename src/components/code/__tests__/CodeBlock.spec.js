import React from 'react'
import { render } from '@testing-library/react'
import CodeBlock from '../CodeBlock'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/bundle/themes/theme.json'

describe('CodeBlock', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockCode',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders children correctly', () => {
    const mockProps = {
      children: 'p',
    }
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const div1 = getByTestId('codeDiv')
    const div2 = getByTestId('code')
    expect(div1.children).toHaveLength(1)
    expect(div2.children).toHaveLength(1)
  })
})
