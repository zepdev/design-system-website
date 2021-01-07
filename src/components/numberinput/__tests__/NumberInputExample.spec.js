import React from "react"
import { render } from "../../../../test-utils"
import NumberInputExample from "../NumberInputExample"

describe("NumberInputExample", () => {
  it("renders correctly", () => {
    const component = render(<NumberInputExample />)
    expect(component).toMatchSnapshot()
  })
})
