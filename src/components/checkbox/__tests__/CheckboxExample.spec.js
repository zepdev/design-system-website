import React from "react"
import { render } from "../../../../test-utils"
import CheckboxExample from "../CheckboxExample"

describe("CheckboxExample", () => {
  it("renders correctly", () => {
    const component = render(<CheckboxExample />)
    expect(component).toMatchSnapshot()
  })
})
