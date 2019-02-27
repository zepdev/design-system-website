import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Swatch from '../Swatch'
import { ThemeProvider } from 'react-jss'
import theme from '../../../data/theme'

jest.useFakeTimers()

describe('Swatch', () => {
  it('renders correctly', () => {
    const mockProps = {
      color: { name: 'name', hex: '#fff' },
      classes: {},
    }
    const component = render(
      <ThemeProvider theme={theme}>
        <Swatch {...mockProps} />
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
      color: { name: 'name', hex: '#fff' },
      classes: {},
    }
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Swatch {...mockProps} />
      </ThemeProvider>
    )
    const button = getByText(mockProps.color.hex)
    fireEvent.click(button)
    expect(getByTestId('swatch-text')).toHaveTextContent(/copied!/i)
    // check that timeout is called and changes text back
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
    jest.runAllTimers()
    expect(getByTestId('swatch-text')).toHaveTextContent(mockProps.color.hex)
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
      color: { name: 'name', hex: '#fff' },
      classes: {},
    }
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <Swatch {...mockProps} />
      </ThemeProvider>
    )
    const button = getByText(mockProps.color.hex)
    fireEvent.click(button)
    expect(getByTestId('swatch-text')).toHaveTextContent(/error!/i)
    // check that timeout is called and changes text back
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
    jest.runAllTimers()
    expect(getByTestId('swatch-text')).toHaveTextContent(mockProps.color.hex)
  })
})
