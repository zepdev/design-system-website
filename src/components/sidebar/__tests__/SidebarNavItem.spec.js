import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'
import theme from 'zeppelin-element-library/guidelines.json'
import SidebarNavItem from '../SidebarNavItem'

describe('SidebarNavItem', () => {
  it('renders correctly', () => {
    const mockProps = {
      setMenu: jest.fn(),
      item: {
        title: 'sectionTitle',
        subnav: {
          subSection: {
            title: 'subSectionTitle',
          },
        },
      },
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <SidebarNavItem {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })

  it('does not render sub-nav section when there is no sub-nav', () => {
    const mockProps = {
      setMenu: jest.fn(),
      item: {
        title: 'sectionTitle',
      },
    }
    const { queryByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <SidebarNavItem {...mockProps} />
      </ThemeProvider>
    )
    // set isButtonOpen to equal true so that the section will render
    const button = getByText(mockProps.item.title)
    fireEvent.click(button)
    expect(queryByTestId('subnav-list')).toBeNull()
  })

  it('renders sub-nav when button is clicked', () => {
    const mockProps = {
      setMenu: jest.fn(),
      item: {
        title: 'sectionTitle',
        subnav: {
          subSection: {
            title: 'subSectionTitle',
          },
        },
      },
    }
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SidebarNavItem {...mockProps} />
      </ThemeProvider>
    )
    const button = getByText(mockProps.item.title)
    fireEvent.click(button)
    expect(getByTestId('sidebarNavItemLink')).toHaveTextContent(
      mockProps.item.subnav.subSection.title
    )
  })
})
