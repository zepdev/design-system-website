import React from 'react'
import { act, render, fireEvent } from '../../../../test-utils'
import CopyButton from '../CopyButton'

jest.useFakeTimers()

describe('CopyButton', () => {
  const mockProps = {
    element: 'someString',
  }
  it('renders correctly', () => {
    const component = render(<CopyButton {...mockProps} />)
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
    const { getByTestId } = render(<CopyButton {...mockProps} />)
    const button = getByTestId('copyButton')
    fireEvent.click(button)
    expect(getByTestId('copyButton')).toHaveTextContent(/copied!/i)
    // check that timeout is called and changes text back
    // expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)

    act(() => {
      jest.runAllTimers()
    })

    expect(getByTestId('copyButton')).toHaveTextContent(/copy/i)
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
    const { getByTestId } = render(<CopyButton {...mockProps} />)
    const button = getByTestId('copyButton')
    fireEvent.click(button)
    expect(getByTestId('copyButton')).toHaveTextContent(/error!/i)
    // check that timeout is called and changes text back
    // expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)

    act(() => {
      jest.runAllTimers()
    })

    expect(getByTestId('copyButton')).toHaveTextContent(/copy/i)
  })
})
