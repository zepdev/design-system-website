import React from "react"
import { render, fireEvent } from "../../../test-utils"
import Header from "../Header"
import "@testing-library/jest-dom/extend-expect"

describe("Header", () => {
  it("renders correctly", () => {
    const mockProps = {
      handleMenu: jest.fn(),
      handleTheme: jest.fn(),
      zelTheme: "zeppelin",
    }
    const component = render(<Header {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
  it("opens theme dropdown correctly", () => {
    const mockProps = {
      handleMenu: jest.fn(),
      handleTheme: jest.fn(),
      zelTheme: "zeppelin",
    }
    const { getByTestId } = render(<Header {...mockProps} />)
    const button = getByTestId("themeButton")
    fireEvent.click(button)
    // Wait for page to update with query text
    expect(getByTestId("themeMenuItemindigo")).toHaveTextContent(/indigo/i)
  })
})
