import React from 'react'
import { render } from 'react-testing-library'
import ListItem from '../ListItem'

describe('ListItem', () => {
  it('renders correctly', () => {
    const component = render(<ListItem />)
    expect(component).toMatchSnapshot()
  })
  it('conditionally renders a label: no label for bullet list', () => {
    const mockProps = {
      children: 'mockText',
      label: 'mockLabel',
      variant: 'bullet',
    }
    const { getByText } = render(<ListItem {...mockProps} />)
    const listItem = getByText('mockText')
    expect(listItem).not.toHaveTextContent('mockLabel')
  })
  it('conditionally renders a label: label for attribute list', () => {
    const mockProps = {
      children: 'mockText',
      label: 'mockLabel',
      variant: 'attribute',
    }
    const { getByText } = render(<ListItem {...mockProps} />)
    const listItem = getByText('mockText')
    expect(listItem).toHaveTextContent('mockLabel')
  })
})
