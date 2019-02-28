import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'
import ElementContent from '../ElementContent'
import elements from '../../data/elements'

describe('ElementContent', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <ElementContent {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('changes the tab content', () => {
    const mockProps = {
      element: 'button',
    }
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ElementContent {...mockProps} />
      </ThemeProvider>
    )
    const tab1 = getByText('code')
    const tab2 = getByText('styles')
    fireEvent.click(tab1)
    expect(getByTestId('elementPreviewText')).toHaveTextContent(
      Object.keys(elements[mockProps.element])[0]
    )
    fireEvent.click(tab2)
    expect(getByTestId('elementContentStyles')).toHaveTextContent(
      /style section/i
    )
  })
})
