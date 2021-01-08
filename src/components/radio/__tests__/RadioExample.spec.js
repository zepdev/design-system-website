import React from "react"
import { render, fireEvent } from "../../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import RadioExample from "../RadioExample"

describe("RadioExample", () => {
  it("renders correctly", () => {
    const component = render(<RadioExample />)
    expect(component).toMatchSnapshot()
  })
  it("changes to A", () => {
    const utils = render(<RadioExample />)
    const input = utils.getByLabelText("a")
    fireEvent.change(input, { target: { value: "a" } })
    expect(input.value).toBe("a")
  })
  it("changes to B", () => {
    const utils = render(<RadioExample />)
    const input = utils.getByLabelText("b")
    fireEvent.change(input, { target: { value: "b" } })
    expect(input.value).toBe("b")
  })
  it("changes inline to A", () => {
    const utils = render(<RadioExample />)
    const input = utils.getByLabelText("inline a")
    fireEvent.change(input, { target: { value: "a" } })
    expect(input.value).toBe("a")
  })
  it("changes inline to B", () => {
    const utils = render(<RadioExample />)
    const input = utils.getByLabelText("inline b")
    fireEvent.change(input, { target: { value: "b" } })
    expect(input.value).toBe("b")
  })
})
