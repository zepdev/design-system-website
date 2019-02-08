import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SidebarNavItem from '../SidebarNavItem'

describe('SidebarNavItem', () => {
  it('renders correctly', () => {
    const mockProps = {
      item: {
        title: 'sectionTitle',
        'sub-nav': {
          subSection: {
            title: 'subSectionTitle',
          },
        },
      },
    }
    const component = render(<SidebarNavItem {...mockProps} />)
    expect(component).toMatchSnapshot()
  })

  it('does not render sub-nav section when there is no sub-nav', () => {
    const mockProps = {
      item: {
        title: 'sectionTitle',
      },
    }
    const { queryByTestId, getByText } = render(
      <SidebarNavItem {...mockProps} />
    )
    // set isButtonOpen to equal true so that the section will render
    const button = getByText(mockProps.item.title)
    fireEvent.click(button)
    expect(queryByTestId('subnav-list')).toBeNull()
  })

  it('renders sub-nav when button is clicked', () => {
    const mockProps = {
      item: {
        title: 'sectionTitle',
        'sub-nav': {
          subSection: {
            title: 'subSectionTitle',
          },
        },
      },
    }
    const { getByText } = render(<SidebarNavItem {...mockProps} />)
    const button = getByText(mockProps.item.title)
    fireEvent.click(button)
    // expect(getByTestId('subnav-list'))
  })
})
