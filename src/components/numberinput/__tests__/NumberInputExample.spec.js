import React from "react"
import { render, fireEvent, screen } from "../../../../test-utils"
import NumberInputExample from "../NumberInputExample"

describe("NumberInputExample", () => {
  it("renders correctly", () => {
    const component = render(<NumberInputExample />)
    expect(component).toMatchSnapshot()
  })
  it("adds one", () => {
    render(<NumberInputExample />)
    fireEvent.click(screen.getAllByRole("button")[0])
    expect(screen.getByLabelText("demo number input").value).toBe("-1")
  })
  it("subtracts one", () => {
    render(<NumberInputExample />)
    fireEvent.click(screen.getAllByRole("button")[1])
    expect(screen.getByLabelText("demo number input").value).toBe("1")
  })
})
