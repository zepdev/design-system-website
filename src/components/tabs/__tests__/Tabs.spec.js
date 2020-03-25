import React from 'react'
import { render } from '../../../../test-utils'
import Tabs from '../Tabs'
import Tab from '../Tab'

describe('Tabs', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: [],
    }
    const component = render(<Tabs {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
  it('renders children component', () => {
    jest.mock('../Tab')
    const mockProps = {
      children: [<Tab label="MockLabel" />],
    }

    const { getByTestId } = render(<Tabs {...mockProps} />)
    const tabs = getByTestId('tabs')
    expect(tabs.children).toHaveLength(1)
  })
})
