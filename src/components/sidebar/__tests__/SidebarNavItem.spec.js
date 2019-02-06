import React from 'react'
import { render, getByTestId } from 'react-testing-library'
import SidebarNavItem from '../SidebarNavItem'

test('It should render', () => {
  const mockProps = {
    item: {
      title: 'Section',
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

test('It should not render subnavigation', () => {
  const mockProps = {
    item: {
      title: 'Section',
    },
  }

  //TODO: integrate state isButtonOpen: true for valid test

  // const mockProps = {
  //   item: {
  //     title: 'Section',
  //     'sub-nav': {
  //       subSection: {
  //         title: 'subSectionTitle',
  //       },
  //     },
  //   },
  // }

  const { queryByTestId } = render(<SidebarNavItem {...mockProps} />)

  expect(queryByTestId('subnav-list')).toBeNull()
})
