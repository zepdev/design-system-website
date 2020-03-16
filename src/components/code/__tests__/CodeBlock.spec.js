import React from 'react'
import { render } from '../../../../test-utils'
import CodeBlock from '../CodeBlock'

describe('CodeBlock', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: 'mockCode',
    }
    const component = render(<CodeBlock {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
  it('renders children correctly', () => {
    const mockProps = {
      children: 'p',
    }
    const { getByTestId } = render(<CodeBlock {...mockProps} />)
    const div1 = getByTestId('codeDiv')
    const div2 = getByTestId('code')
    expect(div1.children).toHaveLength(1)
    expect(div2.children).toHaveLength(1)
  })
})
