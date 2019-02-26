import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CodeBlock from '../CodeBlock'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'

jest.useFakeTimers()

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
  it('renders "Copied!" when correctly copied', () => {
    // mock document as not implemented by jsdom (https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom)
    document.queryCommandSupported = jest.fn().mockImplementation(query => {
      return true
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
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeBlockButton')
    fireEvent.click(button)
    expect(getByTestId('codeBlockButton')).toHaveTextContent(/copied!/i)
    // TODO this doesn't actually test that the text changes...
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })
  it('renders "Error!" if document.execCommand is not supported by browser', () => {
    // mock document as not implemented by jsdom (https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom)
    document.queryCommandSupported = jest.fn().mockImplementation(query => {
      return false
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
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeBlockButton')
    fireEvent.click(button)
    expect(getByTestId('codeBlockButton')).toHaveTextContent(/error!/i)
    // TODO calls the above setTimeout also?
    expect(setTimeout).toHaveBeenCalledTimes(2)
  })
})
