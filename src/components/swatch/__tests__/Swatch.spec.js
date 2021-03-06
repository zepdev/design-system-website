import React from "react"
import { act, render, fireEvent } from "../../../../test-utils"
import Swatch from "../Swatch"
import "@testing-library/jest-dom/extend-expect"

jest.useFakeTimers()

describe("Swatch", () => {
  it("renders correctly", () => {
    const mockProps = {
      name: "name",
      color: "#fff",
      classes: {},
    }
    const component = render(<Swatch {...mockProps} />)
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
      name: "name",
      color: "#fff",
      classes: {},
    }
    const { getByTestId } = render(<Swatch {...mockProps} />)
    const button = getByTestId("swatchButton")
    fireEvent.click(button)
    expect(getByTestId("swatchText")).toHaveTextContent(/copied!/i)
    // check that timeout is called and changes text back
    // expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)

    act(() => {
      jest.runAllTimers()
    })

    expect(getByTestId("swatchText")).toHaveTextContent(mockProps.color)
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
      name: "name",
      color: "#fff",
      classes: {},
    }
    const { getByTestId } = render(<Swatch {...mockProps} />)
    const button = getByTestId("swatchButton")
    fireEvent.click(button)
    expect(getByTestId("swatchText")).toHaveTextContent(/error!/i)
    // check that timeout is called and changes text back
    // expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)

    act(() => {
      jest.runAllTimers()
    })

    expect(getByTestId("swatchText")).toHaveTextContent(mockProps.color)
  })
})
