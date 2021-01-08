import React from "react"
import { render } from "../../../../test-utils"
import InputExample from "../InputExample"

describe("InputExample", () => {
  it("renders correctly", () => {
    const component = render(<InputExample />)
    expect(component).toMatchSnapshot()
  })
})
