/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CodeBlock from '../CodeBlock'
import { ThemeProvider } from 'react-jss'
import theme from '../../data/theme'

jest.useFakeTimers()

describe('CodeBlock', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: {
        js: ['mockCode'],
      },
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
      element: {
        js: ['mockCode'],
      },
    }
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeBlockButton')
    fireEvent.click(button)
    expect(getByTestId('codeBlockButton')).toHaveTextContent(/copied!/i)
    // check that timeout is called and changes text back
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
    jest.runAllTimers()
    expect(getByTestId('codeBlockButton')).toHaveTextContent(/copy icon/i)
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
      element: {
        js: ['mockCode'],
      },
    }
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByTestId('codeBlockButton')
    fireEvent.click(button)
    expect(getByTestId('codeBlockButton')).toHaveTextContent(/error!/i)
    // check that timeout is called and changes text back
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
    jest.runAllTimers()
    expect(getByTestId('codeBlockButton')).toHaveTextContent(/copy icon/i)
  })
  it('changes the tab correctly', () => {
    const mockProps = {
      element: {
        js: ['mockJsString'],
        react: true,
        angular: false,
        vue: false,
      },
    }
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const button = getByText('Vanilla JS')
    fireEvent.click(button)
    expect(getByTestId('code')).toHaveTextContent(mockProps.element.js)
  })
  it('renders react tab when true', () => {
    const mockProps = {
      element: { js: ['mockJsString'], react: true, angular: true, vue: true },
    }
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const tab = getByText('React')
    fireEvent.click(tab)
    expect(getByTestId('code')).toHaveTextContent(mockProps.element.js)
  })
  it('renders angular tab when true', () => {
    const mockProps = {
      element: { js: ['mockJsString'], react: true, angular: true, vue: true },
    }
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const tab = getByText('Angular')
    fireEvent.click(tab)
    expect(getByTestId('code')).toHaveTextContent(mockProps.element.js)
  })
  it('renders vue tab when true', () => {
    const mockProps = {
      element: { js: ['mockJsString'], react: true, angular: true, vue: true },
    }
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    const tab = getByText('Vue')
    fireEvent.click(tab)
    expect(getByTestId('code')).toHaveTextContent(mockProps.element.js)
  })
  it('does not render extra tabs when false', () => {
    const mockProps = {
      element: {
        js: ['mockJsString'],
        react: false,
        angular: false,
        vue: false,
      },
    }
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <CodeBlock {...mockProps} />
      </ThemeProvider>
    )
    expect(queryByTestId('codeBlockTab_React')).toBeNull()
    expect(queryByTestId('codeBlockTab_Angular')).toBeNull()
    expect(queryByTestId('codeBlockTab_Vue')).toBeNull()
  })
})
