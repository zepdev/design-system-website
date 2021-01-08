import React from "react"
import { render, fireEvent, screen } from "../../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import ButtonExample from "../ButtonExample"

describe("ButtonExample", () => {
  it("renders correctly", () => {
    const component = render(<ButtonExample />)
    expect(component).toMatchSnapshot()
  })
  it("renders button1", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: "Primary" }))
    expect(getByTestId("buttonText")).toHaveTextContent("You Clicked: primary")
  })
  it("renders button2", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: /Primary Medium/i }))
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: primary medium"
    )
  })
  it("renders button3", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: /Primary Small/i }))
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: primary small"
    )
  })
  it("renders button4", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: /Primary Full Width/i }))
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: primary full width"
    )
  })
  it("renders button5", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: "Secondary" }))
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: secondary"
    )
  })
  it("renders button6", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: "Secondary Medium" }))
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: secondary medium"
    )
  })
  it("renders button7", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(screen.getByRole("button", { name: "Secondary Small" }))
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: secondary small"
    )
  })
  it("renders button8", () => {
    const { getByTestId } = render(<ButtonExample />)
    fireEvent.click(
      screen.getByRole("button", { name: /secondary Full Width/i })
    )
    expect(getByTestId("buttonText")).toHaveTextContent(
      "You Clicked: secondary full width"
    )
  })
})
