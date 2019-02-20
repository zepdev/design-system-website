/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CodeBlock from '../CodeBlock'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'

describe('CodeBlock', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: {},
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    expect(component).toMatchSnapshot()
  })
  it('renders Copy text on successful copy', () => {
    document.queryCommandSupported = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    })
    document.execCommand = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    })
    const mockProps = {
      element: {},
    }
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeCopyButton')
    fireEvent.click(button)
    expect(getByText('Copied!')).toBeDefined()
  })
  it('returns an error when the document copy function is not supported', () => {
    document.queryCommandSupported = jest.fn().mockImplementation(query => {
      return false
    })
    const mockProps = {
      element: {},
    }
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeCopyButton')
    fireEvent.click(button)
    expect(getByText('Error!')).toBeDefined()
  })
  it('returns an error when the copy function does not work', () => {
    document.execCommand = jest.fn().mockImplementation(query => {
      return false
    })
    const mockProps = {
      element: {},
    }
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeCopyButton')
    fireEvent.click(button)
    expect(getByText('Error!')).toBeDefined()
  })
})
