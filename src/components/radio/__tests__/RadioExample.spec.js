import React from "react"
import { render, fireEvent } from "../../../../test-utils"
import "@testing-library/jest-dom/extend-expect"
import RadioExample from "../RadioExample"

describe("RadioExample", () => {
  it("renders correctly", () => {
    const component = render(<RadioExample />)
    expect(component).toMatchSnapshot()
  })
  it("changes to B", () => {
    const { getAllByLabelText } = render(<RadioExample />)
    const radio = getAllByLabelText("radioGroup")[0]
    fireEvent.change(radio, { target: { value: "b" } })
    expect(radio.value).toBe("b")
  })
  it("changes to A", () => {
    const { getAllByLabelText } = render(<RadioExample />)
    const radio = getAllByLabelText("radioGroup")[0]
    fireEvent.click(radio, { target: { value: "a" } })
    expect(radio.value).toBe("a")
  })
  it("changes inline to A", () => {
    const { getAllByLabelText } = render(<RadioExample />)
    const radio = getAllByLabelText("radioGroup2")[0]
    fireEvent.click(radio, { target: { value: "a" } })
    expect(radio.value).toBe("a")
    expect(getAllByLabelText("radioGroup")[0].checked).toBe(true)
  })
  it("changes inline to B", () => {
    const { getAllByLabelText } = render(<RadioExample />)
    const radio = getAllByLabelText("radioGroup2")[0]
    fireEvent.change(radio, { target: { value: "b" } })
    expect(radio.value).toBe("b")
  })
})
