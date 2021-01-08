import React from "react"
import { render, fireEvent, screen } from "../../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import RadioExample from "../RadioExample"

describe("RadioExample", () => {
  it("renders correctly", () => {
    const component = render(<RadioExample />)
    expect(component).toMatchSnapshot()
  })
  it("changes to B", () => {
    const { getByTestId } = render(<RadioExample />)
    expect(getByTestId("radioText")).toHaveTextContent("you have selected a")
    fireEvent.click(screen.getByTestId("radioB"))
    expect(getByTestId("radioText")).toHaveTextContent("you have selected b")
  })
  it("changes to A", () => {
    const { getByTestId } = render(<RadioExample />)
    fireEvent.click(screen.getByTestId("radioB"))
    fireEvent.click(screen.getByTestId("radioA"))
    expect(getByTestId("radioText")).toHaveTextContent("you have selected a")
  })
  it("changes inline to B", () => {
    const { getByTestId } = render(<RadioExample />)
    expect(getByTestId("radioInlineText")).toHaveTextContent(
      "you have selected a"
    )
    fireEvent.click(screen.getByTestId("radioInlineB"))
    expect(getByTestId("radioInlineText")).toHaveTextContent(
      "you have selected b"
    )
  })
  it("changes inline to A", () => {
    const { getByTestId } = render(<RadioExample />)
    fireEvent.click(screen.getByTestId("radioInlineB"))
    fireEvent.click(screen.getByTestId("radioInlineA"))
    expect(getByTestId("radioInlineText")).toHaveTextContent(
      "you have selected a"
    )
  })
})
