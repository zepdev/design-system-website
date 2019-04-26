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
    const { getByTestId } = render(<ListItem {...mockProps} />)
    const listItem = getByTestId('listItem')
    expect(listItem).toHaveTextContent('mockText')
    expect(listItem).not.toHaveTextContent('mockLabel')
  })
  it('conditionally renders a label: label for attribute list', () => {
    const mockProps = {
      label: 'mockLabel',
      variant: 'attribute',
    }
    const { getByTestId, queryAllByTestId } = render(
      <ListItem {...mockProps} />
    )
    const listItemLabel = getByTestId('listItemLabel')
    expect(listItemLabel).toHaveTextContent('mockLabel')
    expect(queryAllByTestId('listItemLabel')).not.toBeNull()
  })
})
