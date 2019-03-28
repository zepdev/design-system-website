/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from 'react-testing-library'
import CodeBlock from '../CodeBlock'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

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
})
